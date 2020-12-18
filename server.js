const fetch = require('node-fetch');


fetch('https://api.mixmax.com/v1/contacts', {
	/*method: 'POST',
	headers: {
		"Content-Type": "application/json",
        "X-API-Token": "ab8b4db7-02da-405c-a593-72a52e6998a7",
    }
	results: 
   JSON.stringify( {
       { property: 'email', value: 'testingapis@hubspot.com' },
        { property: 'name', value: 'test' },
        { property: 'lastname', value: 'testerson' },
        },
  json: true };*/
    method: 'GET',
    headers: {
        "X-API-Token": "ab8b4db7-02da-405c-a593-72a52e6998a7",
    }
}).then(res => res.json())
.then(json => {
    for (var i in json.results){
    console.log(i+" : ",json.results[i].email);}
	//console.log(json);
})
.catch(err => {
  console.error(err);
});