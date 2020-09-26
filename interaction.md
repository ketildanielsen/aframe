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

This will add a cursor (small ring) that shows were the gaze is.  
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

## Hand controls

## Head rotation
