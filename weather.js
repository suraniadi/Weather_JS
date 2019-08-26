class Weather {
    constructor(city, countryCode) {
        this.apyKey = '565ab33a789b64158b5ab095e9fb3063';
        this.city = city;
        this.countryCode = countryCode;
    }

    //Fetch Weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apyKey}`);

        const responseData = await response.json();

        return responseData;
    }

    //Change Weather Location
    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
}