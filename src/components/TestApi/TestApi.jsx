import axios from 'axios';


const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://api-basketball.p.rapidapi.com/timezone',
  headers: {
    'X-RapidAPI-Key': '4ff47b654amsh6c39eac0138d830p1a2b02jsnfe73c009c89b',
    'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}