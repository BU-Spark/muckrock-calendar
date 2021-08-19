var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://www.muckrock.com/api_v1/agency/?format=api',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
