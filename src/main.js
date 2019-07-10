fetch('http://www.omdbapi.com/?i=tt3896198&apikey=98d30079')
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        console.error(err);
    });





/*
Here is your key: 98d30079

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=98d30079

Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=758cf263-e293-466b-8a15-a3c81ca49e70
If you did not make this request, please disregard this email.
*/
