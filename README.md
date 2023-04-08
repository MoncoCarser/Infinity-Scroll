# Infinity-Scroll
Using Unplash API to get photos.

A custom loader is set to show on the first page load until first set pf photos is fully loaded.

Using Unsplash API we get pictures; by current setting random pictures of regular quality.
Those pictures are then added to the page by DOM manipulation, 5 on first page load, then 30 each time user scrolls close to bottom.
`window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000`

There is also a custom load animation, which only shows during the first page load.

# Potential update to do
By checking Unsplash API documentation, can identify further options to get specific types of pictures as needed.