//Init Storage
const storage  = new Storage();
//Get Stored Location Data
const weatherLocation = storage.getLocationData();

//Init Weather Class
const weather = new Weather(weatherLocation.city,weatherLocation.state);

//Init Ui class
const ui = new Ui()

//Get Weather on Dom Load
document.addEventListener('DOMContentLoaded', getWeather);

//Change Location Event
document.getElementById('w-change-button').addEventListener('click',(e)=> {
   const city = document.getElementById('city').value;
   const state = document.getElementById('state').value;
   weather.changeLocation(city,state);
   //Set Location in Ls
   storage.setLocationData(city,state);
   //Get and Display Weather 
   getWeather();
   //Close Modal
   $('#loc-modal').modal('hide');
});




function getWeather () {
	weather.getWeather()
	.then(results => {ui.paint(results); console.log(results) } )
	.catch(err => console.log(err)); 
}
