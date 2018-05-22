class DOMNodeCollection {

  constructor(nodes) {
    this.nodes = nodes;
  }

// DOMNodeCollection.prototype methods

  html(arg) {
    if (typeof arg == 'string') {
      this.nodes.forEach((node) => {
        node.innerHTML = arg;
      })
    } else {
      return this.nodes[0].innerHTML;
    }
  }

  empty() {
    this.html('');
  }

  append(arg) {
    if (typeof arg == 'string') {
      this.nodes.forEach((node) => {
        node.innerHTML += arg;
      })
    } else if (arg instanceof DOMNodeCollection) {
      this.nodes.forEach((node) => {
        arg.nodes.forEach((nodeCol) => {
          node.innerHTML += nodeCol.outerHTML;
        })
      })
    }
  }

  attr(attrName, attrVal) {
    if (typeof attrVal == 'string') {
      this.nodes.forEach((node) => {
        node.setAttrubute(attrName, attrVal);
      })
    } else {
      return this.nodes[0].getAttribute(attrName);
    }
  }

  addClass(className) {
    this.nodes.forEach((node) => {
      node.classList.add(className)
    })
  }

  removeClass(className) {
    this.nodes.forEach((node) => {
      node.classList.remove(className)
    })
  }

  toggleClass(className) {
    this.nodes.forEach((node) => {
      node.classList.toggle(className)
    })
  }

  on(type, listenerFn) {
    this.nodes.forEach((node) => {
      node.addEventListener(type, listenerFn);
      node.setAttrubute(type, listenerFn);
    })
  }

  off(type) {
    this.nodes.forEach((node) => {
      let listenerFn = node.getAttribute(type);
      node.removeEventListener(type, listenerFn);
    })
  }

// traversal

  children() {
    let childNodes = [];
    this.nodes.forEach((node) => {
      childNodes = childNodes.concat(Array.from(node.children))
    })

    return new DOMNodeCollection(childNodes);
  }

  parent() {
    let parentNodes = [];
    this.nodes.forEach((node) => {
      if (!node.parentNode.visited) {
        parentNodes.push(node.parentNode);
        node.parentNode.visited = true;
      }
    })

    parentNodes.forEach((parentNode) => {
      parentNode.visited = false;
    })

    return new DOMNodeCollection(parentNodes);
  }

  find(selector) {
    let matches = [];
    this.nodes.forEach((node) => {
      matches = matches.concat(Array.from(node.querySelectorAll(selector)));
    })

    return new DOMNodeCollection(matches);
  }

  remove() {
    this.nodes.forEach((node) => {
      node.parentNode.removeChild(node);
    })
  }
}

module.exports = DOMNodeCollection;
