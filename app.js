
// const zip_code = document.getElementsByClassName('search-box').innerHTML;

// console.log("zip code:", zip_code)


window.onload = function () {
    var popup = document.getElementById("search");
    popup.classList.toggle("show");
    console.log("loaded")
}


// let zip_code;

var button = document.getElementById("button");

function action() {

    var zip_code = document.getElementById("zip").value;
    document.getElementById("zip").innerHTML = zip_code;
    console.log("in function", zip_code);

    const api = `https://api.openweathermap.org/data/2.5/weather?zip=${zip_code},us&units=imperial&appid=85f22b2ce42e71abc36c5248597e1b88`;


    var location;
    var weather;
    var desc;

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let location = data.name;
            let weather = data.main.temp;
            let desc = data.weather[0].description;

            console.log(location, weather, desc)
            console.log(data);
        });

    return 0;
}


// button.addEventListener('click', () => {
//     var zip_code = document.getElementById("zip").value;
//     document.getElementById("zip").innerHTML = zip_code;
//     console.log("zip", zip_code)
// })



// function myFunction() {


//     return zip_code
// }
// window.load()
// var z = action();
// console.log("out of function", document.getElementById("zip").value)



// console.log(api)

// var location;
// var weather;
// var desc;

// fetch(api)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         let location = data.name;
//         let weather = data.main.temp;
//         let desc = data.weather[0].description;

//         console.log(location, weather, desc)
//         console.log(data);
//     });


// window.addEventListener('load', () => {
//     let long;
//     let lat;

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             console.log(position)
//         })

//     } else {
//         console.log("Error msg")
//     }
// })