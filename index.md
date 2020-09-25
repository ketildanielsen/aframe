# Programming A-Frame (praifraim)

## Welcome to my learning to program using A-Frame site

We assume almost nothing.  

### Boilerplate

A program is written in a program file.  We begin with a minimal file that contains no more than is absolutely strictly necessary to get started:  The "boilerplate" (and who gave it such a name?): 
```html
<html>
   <head>
      <script src='https://aframe.io/releases/1.0.4/aframe.min.js'></script>
   </head>
   <body>
      <a-scene>
      </a-scene>
   </body>
</html>
```

### Save and run
Copy this into a text editor such as [Notepad++](https://notepad-plus-plus.org/) on Windows, save it (usually Ctrl-S) to boilerplate.html. There are [other editors](https://www.w3schools.com/html/html_editors.asp) Open this file in your web browser (usually Ctrl-O).  You will see a white scene, probably looks like nothing.  

The source code has now been read into your web browser. You can check the source code with Ctrl-U (usually). 

### Check source code
The source code

### Box
A square box is added to the scene with ``<a-box> </a-box>``.  

```html
      <a-scene>
         <a-box> 
         </a-box>
      </a-scene>
```
### Make a copy
Assuming you have boilerplate.html open in the editor. Do a "Save As" (usually Ctrl-S) to new name abox.html.  the two box lines, save and open in the browser. You will see nothing, but there is a scene with white background and a white box, still looks like nothing.

### Coloring
These will be white, unless you add ``color="red"`` (or other named [HTML color](https://www.w3schools.com/html/html_colors.asp) such as "blue" or "yellow").
```html
         <a-box color="red"> 
         </a-box>
```
Add this color attribute and reload abox.html. Now you should see it.  

### Camera and the scene

You do NOT see it?  That is probably because the box is not visible to the camera. This is the VR scene camera, not the webcamera.  Pull the camera back with ArrowDown or the S key, and the box should begin to appear.  

The camera is default positioned in (0, 1.6, 0) which means x=0, y=1.6 and z=0 (meters).  ArrowDown or S will increase z (move camera towards you).  ArrowUp or W will decrease z.  ArrowLeft or A will reduce x and ArrowRight or D will increase x.  Not sure how to change y.

The box is default positioned in (0, 0, 0).  Try to draw a coordinate system with 3 axes.

You can also hit Ctrl-I and see the scene from a different viewpoint.  This is the A-Frame developer window.  You can zoom, rotate etc with the mouse. Ctrl-I brings you back.  Try top view, left view and other view to verify the positioning.  This should explain the situation to you.

### Debug: Check program syntax

You do NOT see the box? No?  Perhaps you have a syntax error?

An A-Frame program has to follow the [HTML syntax rules](https://www.w3schools.com/html/)

Does your abox.html look like this?   
```html
<html>
   <head>
      <script src='https://aframe.io/releases/1.0.4/aframe.min.js'></script>
   </head>
   <body>
      <a-scene>
        <a-box color="red">
        </a-box>
      </a-scene>
   </body>
</html>
```
The written codes have to be identical, but the spacing is less important.  This is also syntactically correct:
```html
<html>
   <head>       <script src='https://aframe.io/releases/1.0.4/aframe.min.js'></script>    </head>
   <body>                               <a-scene>
        <a-box color="red"> </a-box>
               </a-scene>
</body>
</html>
```
But is messy and hard to read.  I think.  The web browser does not care, though.



== Printing text ==
We begin by printing messages to ourselves

# Remaining is not about A-Frrame
(it is the original content about how to use this github pages feature)

You can use the [editor on GitHub](https://github.com/ketildanielsen/aframe/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/ketildanielsen/aframe/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
