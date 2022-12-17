const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd69231acacmshc3d2f727188818bp1b4cd3jsnb5a34e1e83f7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));