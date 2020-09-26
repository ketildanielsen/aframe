# Javascript
To control the scene, basic A-Frame may not be sufficient, so we must resort to Javascript.

We can fex say 
  el.setAttribute ('color', 'blue')
for some element in the scene.

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
