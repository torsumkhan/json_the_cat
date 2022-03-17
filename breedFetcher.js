const request = require('request');


const fetchbreedDescription = function(breedName,callback) {
    let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response,body) => {
    if (error) {
      return callback(`Failed to request details: ${error}`,null);
    }
    const data = JSON.parse(body);
    if (data[0]) {
      return callback(null, data[0].description);
    } else {
      return callback("breed not found", null);
    }
  });
};


// const breedDescription = fetchbreedDescription(breedType);

module.exports = {fetchbreedDescription};
