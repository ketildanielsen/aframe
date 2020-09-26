# Javascript
To control the scene, basic A-Frame may not be sufficient, so we must resort to Javascript.

## The DOM
The browser first reads the HTML document, then interprets it and constructs a DOM in memory.
The DOM is a tree with one root.  Each node has 0 or more children.  Each node (except the root) has 
exactly one parent (parentNode).

Each node is an element and has 0 or more attributes that can be changed.
We can fex say 
  theredbox.setAttribute ('color', 'blue')
for some element theredbox in the scene.

There is also getATtribute.

## Events and handlers

When events occur, the browser will run 0 or more programs called event handlers.  Our program
says which events and which handlers.

As an example: We may want to cheer when the window object is "complete", that is, all things are in place in the window (text, images, videos). 

### outside SCRIPT
The  program can be "inline", which means inside the static HTML.
```html
   <body onload="alert('cheers!');">   
```
Purists think this is bad, as they want to separate content and program.

### inside SCRIPT

Most common, is to place code within a SCRIPT element.
Let's say we want to add a couple of random 3D models:
```javascript
   window.onload = function() {
      // create two random 3D model elements, attach it
   }   
```
There is also a second way, let's say we want to do something
once a gigantic complicated model has loaded:
```javascript
   complicatedmodel.addEventListener ("load", alert("finally!"); );
```


## Actions in the attribute

For a given element, once can specify behavior as follows:
```html
   <... onclick="this.setAttribute('color', 'blue');" ...>
```
where ``this`` referes to the entity.

To affect its parent, it would be
```html
   <... onclick="this.parentNode.setAttribute('color', 'blue');" ...>
```
as in
```html
  <table bgcolor="yellow">
    <tr onclick="this.parentNode.setAttribute('bgcolor', 'red');"> <td>a</td><td>b</td></tr>
    <tr> <td>c</td><td>d</td></tr>
  </table>
```

Elements are in the DOM.
To get a pointer to elements, we need to address them or search for them.  This is called selection.

## CSS selectors

To select elements, we use the [Selector API](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors), see many 
[examples at w3schools](https://www.w3schools.com/cssref/css_selectors.asp)

document.querySelector(s)
document.querySelectorAll(s)

element.querySelector(s)
element.querySelectorAll(s)

where s is a comma-separated list of selectors.

Each selector can be an
element name (such as a-box), will match <a-box>
element id (prefix with #, such as #redbox), matches "id=redbox"
element class (prefix with dot, such as .hitable), matches class=".hitable"

el.cl matches only those el that is of class cl
