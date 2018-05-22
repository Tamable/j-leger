# j-léger
Welcome to j-léger, a DOM manipulation library written in plain vanilla JavaScript

**Live (TBD)**

j-léger is a JavaScript library inspired by jQuery for handling events, manipulating the DOM, and making ajax requests. Its functions enable users to do the following:

* Traverse and manipulate the DOM;
* Add and remove event handlers to DOM nodes / HTML elements;
* Queue up callback functions to be executed after the HTML has finished rendering; and
* Perform simple HTTP (ajax) requests.

## Core function

### $l(argument)
  This core function expects one argument - a string with a CSS selector, an HTML element, or a function.
  If the argument is a string or an HTML element, the function returns an instance of DOMNodeCollection, an array of NodeList that matches the argument. This, in turn, can be used to identify the matching nodes in the document.
  If the argument is a function, it will be executed once the HTML page has been loaded.

## DOMNodeCollection.prototype methods

### empty
### append
### attr
### addClass
### removeClass
### on
### off

## Traversal methods

### children
### parent
### find
### remove

## HTTP requests

### $l.ajax
