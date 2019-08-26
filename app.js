//Init storage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

//Init weather object

const weather = new Weather(weatherLocation.city, weatherLocation.state);

document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('country-code').value;

    //Change Location
    weather.changeLocation(city, countryCode);

    //Set location in LocalStorage
    storage.setLocationData(city, countryCode);

    //Get and display weather
    getWeather();

    //Close modal
    $('#locModal').modal('hide');
})

const ui = new UI();
// weather.changeLocation('Cluj-Napoca', 'RO');

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}