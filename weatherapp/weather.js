class Weather{
    constructor (city, state){
        this.apiKey = '1b860cf7938aaf83c7fe9d446be44aa8';
        this.city = city;
        this.state = state;
    }

    getWeather(){
        let weather = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=metric`)
            .then(res=> {
                return res;
            });
            return weather;
    }

    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}