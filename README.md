
### Install
ThreeSixty is available as NPM package
```
npm i @ashivliving/threesixty-js
```

You can also use it via a CDN
```html
<script src="https://cdn.jsdelivr.net/npm/@mladenilic/threesixty.js/dist/threesixty.js"></script>
```


### Dependencies
No dependacies! Written in plain javascript.

### Example

```js
const threesixty = new ThreeSixty(document.getElementById('threesixty'), {
  image: 'images/example.jpg',
  count: 19,
  perRow: 4,
  prev: document.getElementById('prev'),
  next: document.getElementById('next')
});

threesixty.play();
```
### Options

```js
{
  // Source image url
  image: 'images/example.jpg', // Also supports passing an array of images

  // Sprite options (If array of images are provided, these options are ignored)
  count: 30,                   // Total number of images. Default: 0
  perRow: 5,                   // Number of images per row. Default: 0

  // Width & Height
  width: 300,  // Image width. Default 300
  height: 300, // Image height. Default 300
  startIndex: 0, // Start Index. Default 0

  // Navigation
  prev: document.getElementById('prev'), // Previous button element. Default: null
  next: document.getElementById('next'), // Next button element. Default: null
  keys: true,         // Rotate image on arrow keys. Default: true
  draggable: true,    // Rotate image by dragging. Default: true
  swipeable: true,    // Rotate image by swiping on mobile screens. Default: true
  dragTolerance: 10,  // Rotation speed when dragging. Default: 10
  swipeTolerance: 10, // Rotation speed when swiping. Default: 10
  swipeTarget: document.getElementById('wrapper'), // Element which will listen for drag/swipe events. Default: Image container

  // Rotation settings
  speed: 100,     // Rotation speed during 'play' mode. Default: 10
  inverted: false // Inverts rotation direction,
  containerName: 'reactThreesixtyContainer' //Three sixty container name
}
```

### Array of images
As an alternative to sprite image, ThreeSixty also supports using array of images:
```js
new ThreeSixty(document.getElementById('threesixty'), {
  image: [
    'images/example-1.jpeg',
    'images/example-2.jpeg',
    'images/example-3.jpeg',
    ...
  ],

  ...
})
```
In this case options `count` and `perRow` are ignored.

### Methods

Single frame rotation:
```js
threesixty.next(); 
threesixty.prev(); 
```

Focus *n-th* frame:
```js
threesixty.goto(index);

threesixty.goto(0); // Reset position
threesixty.goto(1); // Focus 1st frame
threesixty.goto(-1); // Focus last frame
```

Image rotation:
```js
// Start rotation
threesixty.play();

// Rotate in oposite direction
threesixty.play(true);

// Stop rotation
threesixty.stop();

// Play/Stop rotation
threesixty.toggle();
```

Clean up registered events:
```js
threesixty.destroy();
```

### Licence

Licensed under the MIT license.
