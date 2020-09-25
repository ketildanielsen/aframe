# Augmented Reality (AR)

If we add computer graphics to a video from the real world, we are augmenting our reality.


<html>
  <head>
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>
  </head>
 <body style='margin : 0px; overflow: hidden;'>
  <a-scene embedded arjs>
        <a-marker-camera preset='hiro'></a-marker-camera>

        <a-plane rotation="-90 0 0" position="0 1.6 0" width="2" height="2" color="white"> </a-plane>
        <a-box color="red" position="1 1.6 0" scale=".1 .1 .1"></a-box>
        <a-box color="red" position="-1 1.6 0" scale=".1 .1 .1"></a-box>
        <a-sphere scale=".1 .1 .1" 
                animation="property:position; to:0 2 0; from:0 -0 0; dur:2000;loop:true" color="yellow">
        </a-sphere>

    </a-scene>
  </body>
</html>
