$(document).ready(function() {
    var api = "https://fcc-weather-api.glitch.me/api/current?";
    var lat, lon;
    var tempUnit = 'F';
    var currentTempInfahrenheit;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
        var lat = "lat=" + position.coords.latitude;
        var lon = "lon=" + position.coords.longitude;
        getWeather(lat, lon);
        });
    }
}
