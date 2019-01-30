# Version 2
- [x] Show reasonably sized photos, currently the photos are too large
- [x] Use Grid CSS
- [x] Tile the shown photos
- [x] Make images a bit more cohesive, the photos shouldn't have weird spacing but should be more closely fitted

- Use `grid-row-end:` rule but first need to specify the `grid-row-end` value depending on height of each individual photo
- [x] Create new React Component for rendering one photo at a time
- [x] Which will figure out the size of the image and adjust the `grid-row-end`
- [x] Create ref inside PhotoCard Component
- [x] Reach into DOM and figure out the height of individual photo
- [x] Calculate how many `grid-row-end` units, set it on the State, feed it into the style of `img` tag


# App Review
- SearchBar: Event Handlers
  1. With an event handler, take an input/form tag
  2. Pass a callback() to a specifically named props(<form onSubmit={this.onFormSubmit}, etc)
  3. When that tag/element emits event, that callback() will be called
  - Rule to keep in mind: anytime there is a cb(), be safe to use ES6 =>() syntax, which will bind the function and have the appropriate value of `this`
  - With Props system, only communicate from Parent down to Child(later an issue)
  - To communicate from Child to Parent, pass a cb() from Parent to Child, then Child will call the cb()

- PhotoList: Render photos, a list of photos
  1. Map function, whenever rendering a list, probably will reach for Map function
  2. Any time a list is made, define a `key` on the root element of that list that is consistent and unchanging

- PhotoCard: React Ref system
  1. Intro to Ref system
  2. Ref used to reach into DOM and interact with some element
  3. Create Ref inside constructor and wire it up to an element by passing it as a ref property
  4. Later on access that ref and get a handle on the DOM node
