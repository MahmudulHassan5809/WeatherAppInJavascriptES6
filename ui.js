class Ui  {
	constructor() {
		this.location = document.getElementById('w-location');
		this.desc = document.getElementById('w-desc');
		this.string = document.getElementById('w-string');
		this.details = document.getElementById('w-details');
		this.icon = document.getElementById('w-icon');
		this.humidity = document.getElementById('w-humidity');
		this.tempMax = document.getElementById('w-temp-max');
		this.tempMin = document.getElementById('w-temp-min');
		this.rain = document.getElementById('w-rain');
		this.wind = document.getElementById('w-wind');
		this.sunrise = document.getElementById('w-sunrise');
		this.sunset = document.getElementById('w-sunset');
	}

	paint(weather){
       
       this.location.textContent = weather.name; 
       this.desc.textContent = weather.weather[0].description;
       this.string.textContent = `${weather.main.temp}C`;
       this.humidity.textContent = `Relative Humidity : ${weather.main.humidity} %`;
       this.wind.textContent = `Wind From ${weather.wind.deg} at ${weather.wind.speed} Meter Per Second`;
       if(weather.rain){
         this.rain.textContent = `Rain Volume For Last 3 Hours ${weather.rain['3h']}`;
       }
       
       this.tempMax.textContent = `Max Temp ${weather.main.temp_max}C`;
       this.tempMin.textContent = `Min Temp ${weather.main.temp_min}C`;
       

       var sunrise = this.Unix_timestamp(weather.sys.sunrise);
       this.sunrise.textContent = `Sun Rise : ${sunrise}`;

       var sunset = this.Unix_timestamp(weather.sys.sunset);
       this.sunset.textContent = `Sun Set : ${sunset}`;


       /***************Icon******************/
       var iconcode = weather.weather[0].icon;
       var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
       this.icon.setAttribute('src', iconurl);
       /***************Icon******************/
	}

	Unix_timestamp(t){
	   var date = new Date(t * 1000);
       var hours = date.getHours();
       var minutes = date.getMinutes();
       var seconds = date.getSeconds();
       var formattedTime = hours + ':' + minutes + ':' + seconds;
       return formattedTime;
	} 
}