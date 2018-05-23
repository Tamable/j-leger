# j-léger
Welcome to j-léger, a DOM manipulation library written in plain vanilla JavaScript

**Live (TBD)**

j-léger is a JavaScript library inspired by jQuery for handling events, manipulating the DOM, and making ajax requests. Its functions enable users to do the following:

* Traverse and manipulate the DOM;
* Add and remove event handlers to DOM nodes / HTML elements;
* Queue up callback functions to be executed after the HTML has finished rendering; and
* Perform simple HTTP (ajax) requests.

## Core function

### $l
This core function expects one argument - a string with a CSS selector, an HTML element, or a function.
If the argument is a string or an HTML element, the function returns an instance of DOMNodeCollection, which is an array of NodeList that matches the argument. This, in turn, can be used to identify the matching nodes in the document.
If the argument is a function, it will be executed once the HTML page has been loaded.

## DOMNodeCollection.prototype methods

### html
Receives an optional string argument.
If it receives an argument, it becomes the innerHTML of each of the nodes in the DOMNodeCollection array. If it does not receive an argument, it returns the innerHTML of the first node in the array.

### empty
Clears out the content of all nodes in the array.

### append
Receives a DOMNode collection, an HTML element, or a string argument. Appends the outerHTML of each element in the argument to the innerHTML of each node in the array.

### attr
Receives an attribute key argument with an optional secondary argument, the corresponding attribute value.
If it receives an attribute key only, it returns the value of the attribute for the first node in the array. If it receives an attribute value along with its key, it sets the attribute to the value for each node in the array.

### addClass
Receives a class argument. Adds the class to each node in the array.

### removeClass
Receives a class argument. Removes the class from each node in the array.

### toggleClass
Receives a class argument. Toggles the class for each node in the array.

### on
Receives an event type and the callback function. Adds the event listener to each node. Stores the callback as an attribute of the node.

### off
Receives an event type. Look up the callback function stored as an attribute. Removes the event listener.

## Traversal

### children
Returns an instance of DOMNodeCollection consisting of all the children of the nodes in the array.

### parent
Returns an instance of DOMNodeCollection consisting of unique parents of the nodes in the array.

### find
Receives a selector argument. Returns an instance of DOMNodeCollection of the nodes that match the selector.

### remove
Removes all the nodes in the array from both the DOM and the array itself.

## HTTP requests

### $l.ajax
Receives one options object argument. Merges the options onto the pre-defined defaults. Makes an HTTP request, using the merged options. Delivers the response in JSON to the success/error callback.

Defaults are set as follows. The options object may contain any of the attributes below.

```javascript
{
  success: () => {},       
  error: () => {},      
  url: "",      
  method: 'GET',     
  data: {},       
  contentType: 'application/x-www-form-urlencoded; charset=UTF-8'      
}
```
