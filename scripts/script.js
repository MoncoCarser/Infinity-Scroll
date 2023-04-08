let firstPageLoad = true;

const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false
let imagesLoaded = 0
let totalImages = 0
let photosArray = []

// Unsplash API
let initialCount = 5
const apiKEY = "lr4nWMJhin73j38hKbFktgQsaRUkZ8wXHLVm2BvCjRw"  // this is a free API key to get free pictures, there are limitations to its usage if one tries to use it for more than testing
let apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKEY}
&count=${initialCount}`

function imagesAreLoaded() {
	imagesLoaded++;
		if (imagesLoaded === totalImages) {
			ready = true
			loader.hidden = true
	}
}

function updateAPIURLWithNewCount(picCount) {
	apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKEY}
&count=${picCount}`
}

function setAttributesInDOM(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key])
	}
}

// Create Elements For links and Photos, Add to DOM
function displayPhotos() {
	imagesLoaded = 0
	totalImages = photosArray.length

	photosArray.forEach((photo) => {
		//  <a> is created to link each photo to Unsplash 
		const item = document.createElement("a")
		setAttributesInDOM(item, {
			href: photo.links.html,
			target: "_blank",
		})
		// Create <img> for photo
		const img = document.createElement("img");
		setAttributesInDOM(img, {
			src: photo.urls.regular,
			alt: photo.alt_description,
			title: photo.alt_description,
		})
		img.addEventListener("load", imagesAreLoaded)
		// Put <img> inside <a>, then both inside imageContainer Element
		item.appendChild(img)
		imageContainer.appendChild(item)
	})
}

async function getPhotosFromUnsplash() {
	try {
		const response = await fetch(apiURL)
		photosArray = await response.json()
		displayPhotos()
		if (firstPageLoad) {
			updateAPIURLWithNewCount(30)
			firstPageLoad = false
		}
	} catch (error) {
		// Catch Error here
	}
}

// Check to see if scrolling near bottom of page -> load more photos
window.addEventListener("scroll", () => {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
		ready = false;
		getPhotosFromUnsplash()
	}
})

//  On load
getPhotosFromUnsplash()