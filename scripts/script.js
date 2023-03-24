// Unsplash API
const count = 10;
const apiKEY = "lr4nWMJhin73j38hKbFktgQsaRUkZ8wXHLVm2BvCjRw";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKEY}
&count=${count}`;

//  Get photos from Unsplash
async function getPhotos() {
	try {
		const response = await fetch(apiURL);
		const data = await response.json();
		consolo.log(data);
	} catch (error) {
		// Catch Error here
	}
}

//  On load
getPhotost(); 