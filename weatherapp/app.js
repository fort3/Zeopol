//initialize storage
const storage = new Storage();

//get store location dat
const weatherLocation = storage.getLocationData();

//instantiate weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//instantiate UI
const ui = new UI();

//get weather on page load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event listener
document.getElementById('w-change-btn').addEventListener('click', function (e){
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    //change location
    weather.changeLocation(city, state);

    //set location iin local storage
    storage.setLocationData(city, state);

    //get and display weather
    getWeather();

    //cloase modal
    $('#locModal').modal('hide');
});


function getWeather(){
    weather.getWeather()
    .then(results => {
        //console.log(result.json());
        return results.json();
    })
    .then(response => {
       // console.log(response);
       ui.paint(response);
    })
    .catch(err => {
        console.log(err);
    });
}

