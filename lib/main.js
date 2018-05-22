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

  let default = {
    success: () => {},
    error: () => {},
    url: "",
    method: 'GET',
    data: {},
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  }

  options = $l.extend(default, options);
  options.method = options.method.toUpperCase();

  if (options.method == 'GET') {
    options.url +=
  }
}

document.addEventListener('DOMContentLoaded', () => {
  _docReady = true;
  callbackQueue.forEach((callback) => callback());
})

window.$l = $l;
