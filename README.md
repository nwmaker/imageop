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


