class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name + ', ' + weather.sys.country;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = Math.floor(weather.main.temp / 10) + '°C';
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
    }
}