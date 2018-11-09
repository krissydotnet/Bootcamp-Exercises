// const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";
// function addDoggo() {
//     // show loading spinner
//     fetch(BREEDS_URL).then(function(response) {
//         return response.json();
//     }).then(function(data) {
//         const img = document.createElement('img');
//         img.src = data.message;
//         img.alt = 'Cute doggo';
    
//         document.querySelector('.doggos').appendChild(img);

//         // stop showing loading spinner
//     });
// }


// document.querySelector('.add-doggo').addEventListener("click", addDoggo);

const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';


const select = document.querySelector('.breeds');

fetch(BREEDS_URL).then(function(response) {
    return response.json();
}).then(function (data) {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);

    for(let i = 0; i < breedsArray.length; i++) {
        const option = document.createElement('option');
        option.value = breedsArray[i];
        option.innerText = breedsArray[i];
        select.appendChild(option);
    }
})

select.addEventListener("change", function(event) {

    // make url
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;

    // show loading spinner

    // fetch from the API
    getDog(url);
    // use the URL to change the current image

    // stop showing loading spinner

});