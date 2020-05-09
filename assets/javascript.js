$(document).ready(function(){
    $(".submit").on("click", function(){
       var searchValue = $("#cityName").val();
       console.log(searchValue);
       searchWeather(searchValue)


    });
    function oneCall(lat, lon) {
        $.ajax({
            type: "GET",
            url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=983a5e7ae90bcad55328ad79f1cfe9af&units=imperial`,
            dataType: "json",
            success: function(res2) {
                console.log(res2)
                
                // create a div (container) for your cards
                var forecastBox = $("<div>").addClass("container").attr("id", "flex-box");
                
                for(var i = 1; i < 6; i++) {
                    // create your card
                    
                    var card = $("<div>").addClass("card");
                    var cardBody = $("<div>").addClass("card-body");
                 
                    var text = $("<p>").addClass("card-text");
                    // var weatherConditions = "Weather Conditions: " + ;
                    var date = moment.unix(res2.daily[i].dt).format("MM/DD/YYYY")
                    var minTemp = "Min: " + Math.round(res2.daily[i].temp.min) +String.fromCharCode(176);
                    var maxTemp = "Max: " + Math.round(res2.daily[i].temp.max) +String.fromCharCode(176);
                    
                    // var day = daily[i];
                    // var iconId = day.weather.icon;
                    // var iconUrl = `http://openweathermap.org/img/wn/1${iconId}@2x.png`;
                    
                    // append your card to the cards div
                    
                    // text.append(weatherConditions);
                    text.append(date);
                    text.append("<br/>");
                    text.append(minTemp);
                    text.append("<br/>");
                    text.append(maxTemp);
                    text.append("<br/>");
            
                
                    cardBody.append(text);
                    card.append(cardBody);
                    forecastBox.append(card);
                    $("#forecast").append(forecastBox);
                }
                
                // append your cards container to #today
            }
        })
    }
    
    
    function searchWeather(term) {
        $.ajax({
            type: "GET",
            url: `https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=983a5e7ae90bcad55328ad79f1cfe9af&units=imperial`,
            dataType: "json",
            success: function(res) {
                console.log(res.coord)
                
                var card = $("<div>").addClass("card");
                var cardBody = $("<div>").addClass("card-body");
                var title   = $("<h2>").addClass("card-title").text(res.name);
                var text = $("<p>").addClass("card-text");
                // var weatherConditions = "Weather Conditions: " + ;
                var temp = "Temperature: " + Math.round(res.main.temp) +String.fromCharCode(176);
                var humidity = "Humidity: " + res.main.humidity;
                var windSpeed = "Wind Speed: " + Math.round(res.wind.speed);
                // var uvIndex = "UV Index: " + res2.value;
            
                // text.append(weatherConditions);
                text.append("<br/>");
                text.append(temp);
                text.append("<br/>");
                text.append(humidity);
                text.append("<br/>");
                text.append(windSpeed);
                text.append("<br/>");
                // text.append(uvIndex);
            
                cardBody.append(title);
                cardBody.append(text);
                card.append(cardBody);
                $("#today").append(card);
                oneCall(res.coord.lat, res.coord.lon)
                    
               
            }
        })

    }






})