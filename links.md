# Link
A link in web is an address (URL).
To follow a link, the user has to do something.  Click on it (in a web browser) or
look intensely at it (with some fancy glasses).

A-Frame got links in v0.6.0 according to [this blog post](https://aframe.io/blog/aframe-v0.6.0/] of 29 June 2017.

This was written on October 1, 2020.  Seems to work at the time of writing.

## Simplest?

Since there is no mouse inside the helmet experience (as I am aware of), I
add a cursor which follows the camera.  When the gaze (a ray) hits the
link, it will result in a "mouseover" event in the entity (such as a box, below).

```html
    <a-camera> <a-cursor > </a-cursor> </a-camera>
    <a-box onmouseover="window.location='...'" > </a-box>
```
Click and doubleclick (on PC) seem to not have any effect.

## your own component
This is just some fancy wrap around the above idea (source: [stackoverflow](https://stackoverflow.com/questions/51506363/a-frame-link-to-url-with-logo))
```javascript
AFRAME.registerComponent("mylink", {
  init: function() {
    this.el.addEventListener("mouseenter", (e)=> {
       window.location = this.data.href;
       // equals the "href:<url>" in the attribute
    })
  }
})
...
<a-box color="red" mylink="href: https://panorama.himolde.no/aframe/phi2.html;"> </a-box>
```

## A-Frame's link component
This works (using the camera cursor):
```html
<a-box color="yellow" position="-1 1 -2"
       link="href:https://panorama.himolde.no/aframe/phi2.html; on:mouseenter;">
</a-box>
```
Again, click, no.

This below does not give any visible link (from A-Frame):
```html
 <a-entity link="href: index.html; title: My Homepage; image: #homeThumbnail"></a-entity>
```
Not sure what they, giving this example. Tried using it in an a-box, and (as noted above),
the linking mechanism works, but The Title and the image does not appear:
```html
      <a-box
             color="blue" position="-2 1 -2"
             link="href:https://panorama.himolde.no/aframe/phi2.html; 
                   title: Link;
                   image: himlogo.jpg;
                   on:mouseenter;">
      </a-box>
```
## A-Frame's a-link primitive
Again, an example straight from A-Frame:
```html
<a-link href="index.html" title="My Homepage" image="#homeThumbnail"></a-link>
```
and, adapted to my situation:
```html

```

## The link-controls components
Supposedly a "better" experiense. Not tryed.
```html
<script src="https://raw.githubusercontent.com/aframevr/aframe/master/examples/showcase/link-traversal/js/components/link-controls.js"></script>
```
