const {fetchbreedDescription} = require('./breedFetcher');

const breedName = process.argv[2];

fetchbreedDescription(breedName,(error, desc) => {
  if (error) {
    console.log('Error fetch details', error);
  } else {
    console.log(desc);
  }
});