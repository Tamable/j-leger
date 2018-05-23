const DOMNodeCollection = require('./dom_node_collection');

let docReady = false;
let callbackQueue = [];

const $l = function(arg) {

  if (typeof arg == 'string') {
    let nodeList = document.querySelectorAll(arg);
    let nodeListArr = Array.from(nodeList);
    return new DOMNodeCollection(nodeListArr);
  } else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection(Array.from(arg));
  } else if (typeof arg == 'function') {
    if (docReady) {
      arg();
    } else {
      callbackQueue.push(arg);
    }
  }
}

$l.extend = function(src, ...objects) {
  objects.forEach((object) => {
    Object.keys(object).forEach((key) => {
      src[key] = object[key];
    })
  })
  return src;
}

$l.ajax = function(options) {
  let oReq = new XMLHttpRequest();

  let defaults = {
    success: () => {},
    error: () => {},
    url: "",
    method: 'GET',
    data: {},
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  }

  options = $l.extend(defaults, options);
  options.method = options.method.toUpperCase();

  let esc = encodeURIComponent;
  let query = Object.keys(options.data).map((key) => {
    return esc(key) + '=' + esc(options.data[key])
  }).join('&');

  if (options.method === 'GET') {
    options.url += '?' + query;
  }

  oReq.open(options.method, options.url, true);
  oReq.onload = (e) => {
    if (oReq.status === 200) {
      options.success(oReq.respnse);
    } else {
      options.error(oReq.response);
    }
  };

  oReq.send(JSON.stringify(options.data));
}

document.addEventListener('DOMContentLoaded', () => {
  _docReady = true;
  callbackQueue.forEach((callback) => callback());
})

window.$l = $l;
