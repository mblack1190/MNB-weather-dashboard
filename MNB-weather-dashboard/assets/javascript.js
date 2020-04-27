
var cityNameEl = document.querySelector("#cityName")
var cityInputEl = document.querySelector("#cName")


var formSubmitHandler = function(event) {
    event.preventDefault();
    var cityInput = cityNameEl.value.trim();
    console.log(cityInput)

    var apiUrl = "https://api.openweathermap.org/data/2.5/find?q=" + cityName + "&units=imperial&appid=983a5e7ae90bcad55328ad79f1cfe9af";

        fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};
cityInputEl.addEventListener("submit", formSubmitHandler)