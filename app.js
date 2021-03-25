
// const zip_code = document.getElementsByClassName('search-box').innerHTML;

// console.log("zip code:", zip_code)


window.onload = function () {
    var popup = document.getElementById("search");
    popup.classList.toggle("popup");
    // console.log("loaded")
}


// taking the zip code and converting to latitude and longiture.

function getLatLong() {
    return new Promise((resolve, reject) => {

        var zip_code = document.getElementById("zip").value;
        document.getElementById("zip").innerHTML = zip_code;

        const api = `https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-codes&q=${zip_code}&facet=zipcodetype`;

        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {

                // let lat = data.records[0].fields.coord[0];
                // let long = data.records[0].fields.coord[1];

                var location = data.records[0].fields.locationtext

                document.querySelector(".location-city").textContent = location;

                // // console.log(location, weather, desc)
                // console.log(lat, long, location)
                // console.log(data);
                resolve(data);

            });

    })

}

// function dates(){

//         var d = new Date();
//         var weekday = new Array(7);
//         weekday[0] = "Sunday";
//         weekday[1] = "Monday";
//         weekday[2] = "Tuesday";
//         weekday[3] = "Wednesday";
//         weekday[4] = "Thursday";
//         weekday[5] = "Friday";
//         weekday[6] = "Saturday";

//         var next_day = weekday[d.getDay()+1];
//         var day_two = weekday[d.getDay()+1]
//         document.getElementById("demo").innerHTML = n;
// }


async function action() {


    let data = await getLatLong();
    let lat = data.records[0].fields.coord[0];
    let long = data.records[0].fields.coord[1]


    const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&us&units=imperial&exclude=minutely&appid=c65b5a4ae830931f5359393fc7c1e58b`;


    var popup = document.getElementById("search");
    var element = document.body;

    // toggle 
    element.classList.toggle("show");
    popup.classList.toggle("popup");

    document.getElementsByClassName("search-box")[0].style.display = "none";


    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {

            //current weather
            let current_temp = Math.round(data.current.temp);
            let current_desc = data.current.weather[0].description;
            let current_feel = Math.round(data.current.feels_like);
            let current_icon = data.current.weather[0].icon;

            // daily weather
            let degree_one = Math.round(data.daily[1].temp.day);
            let degree_two = Math.round(data.daily[2].temp.day);
            let degree_three = Math.round(data.daily[3].temp.day);
            let degree_four = Math.round(data.daily[4].temp.day);
            let degree_five = Math.round(data.daily[5].temp.day);

            let high_one = Math.round(data.daily[1].temp.max);
            let high_two = Math.round(data.daily[2].temp.max);
            let high_three = Math.round(data.daily[3].temp.max);
            let high_four = Math.round(data.daily[4].temp.max);
            let high_five = Math.round(data.daily[5].temp.max);

            let low_one = Math.round(data.daily[1].temp.min);
            let low_two = Math.round(data.daily[2].temp.min);
            let low_three = Math.round(data.daily[3].temp.min);
            let low_four = Math.round(data.daily[4].temp.min);
            let low_five = Math.round(data.daily[5].temp.min);

            let desc_one = data.daily[1].weather[0].description;
            let desc_two = data.daily[2].weather[0].description
            let desc_three = data.daily[3].weather[0].description;
            let desc_four = data.daily[4].weather[0].description;
            let desc_five = data.daily[5].weather[0].description;

            let icon_one = data.daily[1].weather[0].icon;
            let icon_two = data.daily[2].weather[0].icon
            let icon_three = data.daily[3].weather[0].icon;
            let icon_four = data.daily[4].weather[0].icon;
            let icon_five = data.daily[5].weather[0].icon;


            let date_one = new Date(data.daily[1].dt * 1000);
            let date_two = new Date(data.daily[2].dt * 1000);
            let date_three = new Date(data.daily[3].dt * 1000);
            let date_four = new Date(data.daily[4].dt * 1000);
            let date_five = new Date(data.daily[5].dt * 1000);


            //daily weather
            document.querySelector(".degree-one").textContent = degree_one;
            document.querySelector(".degree-two").textContent = degree_two;
            document.querySelector(".degree-three").textContent = degree_three;
            document.querySelector(".degree-four").textContent = degree_four;
            document.querySelector(".degree-five").textContent = degree_five;

            document.querySelector(".high-one").innerHTML = `H: ${high_one}°F`;
            document.querySelector(".high-two").innerHTML = `H: ${high_two}°F`;
            document.querySelector(".high-three").innerHTML = `H: ${high_three}°F`;
            document.querySelector(".high-four").innerHTML = `H: ${high_four}°F`;
            document.querySelector(".high-five").innerHTML = `H: ${high_five}°F`;

            document.querySelector(".low-one").innerHTML = `L: ${low_one}°F`;
            document.querySelector(".low-two").innerHTML = `L: ${low_two}°F`;
            document.querySelector(".low-three").innerHTML = `L: ${low_three}°F`;
            document.querySelector(".low-four").innerHTML = `L: ${low_four}°F`;
            document.querySelector(".low-five").innerHTML = `L: ${low_five}°F`;

            document.querySelector(".desc-one").textContent = desc_one[0].toUpperCase() + desc_one.substring(1);
            document.querySelector(".desc-two").textContent = desc_two[0].toUpperCase() + desc_two.substring(1);
            document.querySelector(".desc-three").textContent = desc_three[0].toUpperCase() + desc_three.substring(1);
            document.querySelector(".desc-four").textContent = desc_four[0].toUpperCase() + desc_four.substring(1);
            document.querySelector(".desc-five").textContent = desc_five[0].toUpperCase() + desc_five.substring(1);

            document.querySelector(".date-one").innerHTML = `<h3> ${date_one.getMonth() + 1} / ${date_one.getDate()}</h3>`;

            document.querySelector(".date-two").innerHTML = `<h3> ${date_two.getMonth() + 1} / ${date_two.getDate()}</h3>`;

            document.querySelector(".date-three").innerHTML = `<h3> ${date_three.getMonth() + 1} / ${date_three.getDate()}</h3>`;

            document.querySelector(".date-four").innerHTML = `<h3> ${date_four.getMonth() + 1} / ${date_four.getDate()}</h3>`;

            document.querySelector(".date-five").innerHTML = `<h3> ${date_five.getMonth() + 1} / ${date_five.getDate()}</h3>`;


            document.querySelector(".icon-one").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon_one}@2x.png">`

            document.querySelector(".icon-two").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon_two}@2x.png">`

            document.querySelector(".icon-three").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon_three}@2x.png">`

            document.querySelector(".icon-four").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon_four}@2x.png">`

            document.querySelector(".icon-five").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon_five}@2x.png">`

            document.querySelectorAll("span").forEach(e => e.textContent = "F");


            // current weather
            document.querySelector(".current-desc").textContent = current_desc[0].toUpperCase() + current_desc.substring(1);

            document.querySelector(".current-feel").innerHTML = `Feels Like: ${current_feel}°F`;

            document.querySelector(".degree").textContent = current_temp;

            document.querySelector(".current-icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${current_icon}@2x.png">`

            console.log(data);
        });

    return 0;

}

// event listener for hitting Enter
var input = document.getElementById("zip");
input.addEventListener("keyup", function (event) {
    if (event.code === 'Enter') {
        event.preventDefault();
        action();
    }
});
