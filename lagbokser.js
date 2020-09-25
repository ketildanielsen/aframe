// lagbokser.js, slik den var i lab 7/9-2020
	var bokslager = setInterval (lagboks, 2000);
        var antBokser = 0; // må huske hvor mange vi har laget
	function uniform (a,b) { return a + (b-a)*Math.random(0,1); }
        function tpos() { return uniform(-5,5); }
	function lagboks() {
           var scene = document.querySelector ('a-scene'); 
           ny = document.createElement ('a-box') 
           ny.object3D.position.x=tpos();  
           ny.object3D.position.y=tpos();  
           ny.object3D.position.z=tpos();  
           scene.appendChild (ny); 
           antBokser++; // øk antall bokser
           if (antBokser >= 7) { // sjekk hvor mange vi har laget
	     clearInterval (bokslager);
           }
        }
