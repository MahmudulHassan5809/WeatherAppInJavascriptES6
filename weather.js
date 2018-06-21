class Weather  {
	constructor(city,state) {
		this.apiKey = '07960e414f8196d7c1dbee70a936862a';
		this.city = city;
		this.state = state;
	}

	// Fetch Weather From Api
	async getWeather(){
		const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=Metric&appid=${this.apiKey}`)
		const responseData = await response.json();
		return responseData;
	}

	//Change Weather Location
	changeLocation(city , state){
		this.country = city;
		this.state = state;
	}
}