# Infinity-Scroll

Using Unplash API to get a large amount of photos.
A custom loader is set to show on the first page load until first set pf photos is fully loaded.
From then on more photos should be loaded ready when user reaches a certain bottom level of the page.
`window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000`
