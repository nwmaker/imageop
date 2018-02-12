# Image operations

Play with images based on next.js and react.js.

## Set up
```
npm i -S next@latest react@latest react-dom@latest
```

## Show an image

Image comes in many formats. In the comps, the image component assumes png. 

Browser has its own defaults. Without any styling, here is the default when running this.
```
body {
  display: block;
  margin: 8px;
}
```

Two images: 
monarch is bottom, clown fish on top. On hover, one image to another.
fade has the similar effect but animated in opacity.

All the images are put in the same spot. Then play with opacity (transparency) using CSS for fade-in effect.

So the opacity can be used to show or hide an image.
Here is a [reference](http://css3.bradshawenterprises.com/cfimg/) to play with CSS, sometimes with jQuery. Ctrl-click to inpsect one particular element.

This techniques can be used to create zoom-in-out or rotate.

## Reference
* [React Docs](https://reactjs.org/docs/animation.html)
* [react-css-animation](https://wikiwi.github.io/react-css-transition/)
* [CSS or CSS+jQuery](http://css3.bradshawenterprises.com/cfimg/)
* [React-motion based, advanced TODO](https://github.com/souporserious/react-view-pager)
