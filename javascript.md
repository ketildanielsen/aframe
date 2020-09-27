# Javascript

To control the scene, basic A-Frame may not be sufficient, so we must resort to Javascript.
To explain this, we will use some timers and events that will run example Javascript programs.

## Text

We use text a lot, both for programming and to communicate with the users.  
This datatype is called [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).
To quote Mozilla, there are 4 ways to create a string:
```javascript
string1 = "A string primitive";            // double quote
string2 = 'Also a string primitive';       // single quote
string3 = `Yet another string primitive`;  // backtick
string4 = new String("A String object");   // as object
```

## Text messages

Sometimes we need to print messages, either to the user or to ourselves for debugging purposes.

One is console.log("..." which prints to the console. In a web browser, you find the console in the Developer Window (oftenly F12).  The program continues, and you have to open the console to see what was written.

Another is alert("..."), which displays text in an interactive box. The program is paused until the OK button is clicked.

A third way is to change the value attribute of an a-text element in A-Frame.  To change it:
```html   
   <script>
      setTimeout ( function () {
         document.getElementById("statustext").setAttribute("value", "Running..."), 
         3000 );
      }
   </script>
   <a-text id="statustext" value="Starting..." color="green">
```


## Numbers

Numbers are used to count and calculations (obviously). To print numbers 1 to 10:
```javascript
var i=0;
while (i<1=10) {
  console.log( i );
  i++;
}
```
In the browser, use F12 to find the console.  This is quite useless, but it is an example.
### populating a scene
If we want 200 boxes in our scene, it is a great advantage to master counting and calculations.
First, we use the counter (i) to stop the loop:
```javascript
var scene = document.querySelector ('a-scene'); // returns first scene 
var i=0;
while (i<200) { // when to stop
  var newbox = document.createElement('a-box');
  scene.appendChild( newbox );
  i++;
}
```
The boxes have same position and visually, we see only one (!). To give them
different position, add this:
```javascript
   newbox.object3D.position.x = i; 
```
so the i'th box will be in position (i, 0, 0).  This is metres, so they will be overlapping, since they are 1x1x1 boxes.
To add some space between boxes:
```javascript
   newbox.object3D.position.x = i*2; 
```
To give the boxes individual id:
```javascript
   newbox.setAttribute ("id", "box"+i); 
```
we can then later refer to e.g. "box57".

### naming

We try to use meaningful names.  Such as nbr_stars for a counter (of stars in the scene), or nbrStars, which would be the so-called camel Case notation ([w3schools](https://www.w3schools.com/js/js_conventions.asp) and [Firefox developers](https://firefox-source-docs.mozilla.org/code-quality/coding-style/coding_style_js.html)).

## Functions
A program can be placed in a named or anonymous function.  When called, the program inside the function is executed and
the function ends.
```javascript
function () { ... };                // anonymous
function do_something () { ... };   // named (can be called by name)
...
if (...) { do_something(); ]
```
The advantage of a named function is that it can be called from various places, not just one place.
Meaningful function names also  increases readability.

A function can be called from the Javascript program.  Or, it can be called in the HTML code when
something has happened.  
```html
XXX NOT TRUE
   <a-scene onload="console.log('Scene completed loading');" >  
   <a-scene onload="function() { console.log('Scene completed loading'); }" >
```
The first will not be allowed, errors in console (F12).
   
Note: consolefunction() { .log("..") is a built-i }n function that prints out text (see below).
There are thousands of built-in fun

The first will not be allowed, errors in console (F12).
   
## security

The browser may deny to run a program. One is due to [script-src in Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).


## Timers

We use timers to cause things to happen in our scene based on time.

Javascript has some built-in functions related to timers
(see details: [Mozilla](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals#setTimeout), [w3schools](https://www.w3schools.com/js/js_timing.asp)).

### single timer

The ``setTimeout (create_tigers, 30000)`` will call on function ``create_tigers`` in 30 seconds.
It is called only once.  

If you regret, and need to cancel the timer, use ``clearTimeout(fname)`` where
we use the remembered value of the timer ``var fname = setTimeout(..)``.

An example: We are due at a meeting that starts in 1 hour and want a reminder 10 minutes before:
```javascript
var reminder = setInterval ( alert('Meeting starts in 10 minutes'), 50*60*1000);
   ...
   <button value="Cancel timer" onclick="clearTimeout(reminder);" >
```
The cancellation is triggered by a button click in HTML. If the user clicks after the timer
was cancelled, it will not halt the execution.

It is a bit lazy to let 
Javascript calculate the milliseconds, but we know it will be correct.

### repeating timer

To start a repeating timer, ``setInterval (blink_star, 2500)`` will repeatedly (not just once) call on 
function ``blink_star`` every 2.5 seconds.

To stop it, we must remember the function in a variable,``var fname = setInterval (...)``
and later do a ``clearInterval (fname)``, as below:
```javascript
   var blinker = setInterval (blink_star, 2500);
   var nbrBlinks = 0;
   function blink_star() {
      // change the star's light intensity
      if (nbrBlinks++ >= 100) {
         clearInterval (blinker);
      }
   }
```

To change the interval, the timer has to be stopped and restarted with new interval.

(Aside: To make intervals random, make use of ``Math.random(0,1)``, which generates a random number between 0 and 1.)


## The DOM

The browser first reads the HTML document, then interprets it and constructs a data structure called
the [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) DOM 
in memory.

The DOM is a graph where many nodes are linked together. One node is the root node.  Each node has 0 or more children.  Each node (except the root) has exactly one parent (parentNode).  This makes the graph look like a tree, "growing up" from the root node.

The simple VR scene with a box and a sphere gives this tree: 
```
html (Element)
   head (Element)
      script (Element)
         src (Attribute)
   body (Element)
      a-scene (Element)
         a-box (Element)
            color (Attribute)
            position (Attribute)
         a-sphere (Element)
 ```  
 
## Attributes
Each element has 0 or more programmable attributes.  
```javascript
   el.setAttribute(a,v)
   v=el.getAtribute(a)     // returns string or ""
   el.removeAttribute(a)   
   hasAttribute(a)         // returns Boolean
```
### Set value of attribute
We can change color by
```javascript
   el.setAttribute ('color', 'blue')
```
for some element el in the scene.  
such as in this snippet, changing color after a while:
```javascript
   setTimeout ( colorchanger, 1000);
   function colorchanger () {
      el = document.getElementById ("box1");
      el.setAttribute('color', 'blue');
   }
   <a-box id="box1">
```   

### Read value of attribute
We can read a value value, and use that to guide the program,
such as
```javascript
   setInterval ( colorchanger, 1000);
   function colorchanger () {
      el = document.getElementById ("box1");
      cur_color = box1.getAttribute('color');
      if ( cur_color = 'red' ) {
         el.setAttribute('color', 'blue');
      } else {
         el.setAttribute('color', 'red');
      }
   }
   <a-box id="box1">
```  
which causes the box to change colors periodically.


```javascript
   var curpos = el.getAttribute ("position");
```


To remove an attribute:
```javascript
   el.removeAttribute("id");
```
We can also add our own attributes, if we need to remember things about an element
```javascript
   el = document.createElement("a-sphere");
   var current_time = new Date().getTime(); // milliseconds since 1.1.1970
   el.setAttribute("timecreated", current_time);
```
where we later in time will be able to compute age of the sphere.  If that is important.

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
