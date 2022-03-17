const request = require('request');

let args = process.argv.slice(2);
const breedType = args[0];

const fetch = function(input) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${input}`;
  request(url, (error, response,body) => {
    if (error) {
      console.log(error);
      return;
    }
    const data = JSON.parse(body);
    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log("breed not found");
    }
  });
};

fetch(breedType);
