var axios = require('axios');

const HASHKU_URL = 'https://hashku.herokuapp.com/api/hashku';

module.exports = {
  getHashkus: function(word1, word2) {
    
    var encodedWord1 = encodeURIComponent(word1);
    var encodedWord2 = encodeURIComponent(word2);
    var requestUrl = `${HASHKU_URL}`;

      return axios.post(requestUrl, {word1: encodedWord1, word2: encodedWord2})
        .then(function(res) {
          if (res.data.cod && res.data.message) {
              throw new Error(res.data.message);
          } else {
              return res.data;
          }
        }, function(res) {
          throw new Error(res.data.message);
      }).catch(function(res) {
          console.log('Caught an error');
        });
    }
};
