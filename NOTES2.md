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
