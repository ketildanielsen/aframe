# Augmented Reality (AR)

If we add computer graphics to a video from the real world, we are augmenting our reality.

## Marker-based AR
The user has to place a marker in front of the camera to trigger the scene to be built.  The "hiro marker"
is included, and will be recognized.  We have to train ar.js to recognize other markers.
```html
<html>
  <head>
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>
  </head>
  <body style='margin : 0px; overflow: hidden;'>
     <a-scene embedded arjs>
        <a-marker-camera preset='hiro'></a-marker-camera>
   </a-scene>
</body>
</html>
```
What is new is sourcing the ar.js (line 9), a ``style`` attribute in ``body``, two component attributes in ``a-scene`` and
a new entity ``a-marker-camera``.  Their meaning is not understood.

Save this as ar1.html and load into a browser with access to a camera.

The marker will look for the hiro square.  When found, it will build a scene on top (of the square).

This was tried as content:
```html
        <a-plane rotation="-90 0 0" position="0 1.6 0" width="2" height="2" color="white"> </a-plane>
        <a-box color="red" position="1 1.6 0" scale=".1 .1 .1"></a-box>
        <a-box color="red" position="-1 1.6 0" scale=".1 .1 .1"></a-box>
        <a-sphere scale=".1 .1 .1" 
                animation="property:position; to:0 2 0; from:0 -0 0; dur:2000;loop:true" color="yellow">
        </a-sphere>
```
It seems to verify that the hiro square is at y=1.6. 

The idea seems to be that we place markers where we think it will arouse an interest.  Inside a book, newspaper, magazine, 
old-style bulletin boards.  

Not sure how we can force the user to load the appropriate A-frame code to read the marker.

## Location-based AR

With our smartphone, we can point the video camera around.  With ar.js, we can place entities at certain geographical
places (latitude and longitude).  The user can approach the entity, which at some point will trigger more.

## Image-based AR

An image can also be used as a marker, but is much harder to detect. Takes longer to train.  Long train.
