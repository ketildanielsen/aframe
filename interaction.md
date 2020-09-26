# Interaction
Both input and output, mostly input.  Touching or clicking things can trigger behavior such as change of color, 
transformation (position, scale, rotation) or animation.

What you can do depends on if you are on a PC, mobile or using a headset (head mounted display).

## Traditional 
An element can be programmed to react to events.  Such as a button
```html
<button onclick="alert('hello')">
```
or
```javascript
document.getElementById ("carimage").addEventListener ( "click", alert('that is a car'); );
```

## Keyboard
The superkeyboard.
```
	<script src="js/aframe-super-keyboard.min.js"></script>
  
      <a-entity id="keyboard" super-keyboard="hand: #mouseCursor; imagePath: images/;" keyboard-functions
    position="0 1.25 -0.5" rotation="-30 0 0"></a-entity>
```    
## Mouse, touchpad

## Gaze

A gaze is where the user is "seeing". It possible on a PC, mobile and in a HMD helmet.

A gaze usually follows the camera (the viewpoint of the user).  This will add a cursor (small ring) that shows were the gaze is.  
```html
   <camera>
      <cursor> </cursor>
   </camera>
```
It is like casting a ray on an entity.  The gaze is a pointer, and the entity
can react on mouseenter, mouseleave events.
```html
        <a-box color="red" onmouseenter="alert('hit');" >  </a-box>
        <a-camera> <a-cursor> </a-cursor> </a-camera>
```
Clicking the box will not cause a click event, however.

If you e.g. want the gaze to delete entities, create a function for this
```javascript
function deleteme(me) { me.parentNode.removeChild(me); }
```
and use it whereever needed:
```html
        <a-box color="red" onmouseenter="deleteme(this);" > </a-box>
        <a-box color="blue" onmouseenter="deleteme(this);" position="1 1 1"> </a-box>
```
This works fine.  However, A-Frame recommends components, as it makes the code cleaner.

```javascript
      AFRAME.registerComponent("gazedelete", {
        init: function() {
          let el = this.el; 
          el.addEventListener("mouseenter", function() {
            el.parentNode.removeChild(el);
          });
        }
      });
```
and use the component whereever needed (as an HTML attribute):
```html
        <a-box color="red" gazedelete > </a-box>
        <a-box color="blue" gazedelete position="1 1 1"> </a-box>
```

## Hand controls

If on an original Oculus Rift, the following will add two hand controls:
```html
        <a-entity laser-controls="hand: left"></a-entity>
        <a-entity laser-controls="hand: right"></a-entity>
```
The component is [laser-controls](https://aframe.io/docs/1.0.0/components/laser-controls.html) and will
work with many controls they say, not just the Oculus ones.

To control which entities can be hit by the laser, add an objects attribute.
```html
           <a-entity laser-controls="hand: left" raycaster="objects: redbox"></a-entity>
           ...
           <a-box id="redbox" onmouseenter="this.setAttribute('color','blue');"> </abox>
           <a-sphere class="laserhit" ...> </a-sphere>
```
Or, use a class-based approach (prefix classname with a dot):
```html
           <a-entity laser-controls="hand: left" raycaster="objects: .hitable"></a-entity>
           ...
           <a-box    class="hitable"> </abox>
           <a-sphere class="hitable"> </a-sphere>
```
and ensure that all in this class will react to the mouseenter event.
```javascript
   allHitable = document.getElementsByClassName("hitable");
   for (var i=0; i<allHitable.length; i++) {
      allHitable[i].addEventListener('mouseenter', ...);
   }
```
or, use more fancy ways of coding it:
```javascript
document.querySelectorAll('.hitable').forEach(item => {
  item.addEventListener('mouseenter', event => {
    ...
  })
})
```
And, there are more ways. The point now, is that we/you have a way to know where the lasers have hit.
Q1: How to make the right hand do other things than the left?  Such as, the left hand is used to combat
boxes and the right hand to regulate some other device?
## Head rotation
