const express = require('express');
const fetch = require('node-fetch');
const pg = require('pg');
const bodyParser = require("body-parser")
const app = express();
const PORT = 3000

app.use(bodyParser.json());

const conString = "postgres://gunazoip:nHADdQIwNuCkkPX84tlN8kg3mYlaK0Ad@suleiman.db.elephantsql.com:5432/gunazoip" //Can be found in the Details page
const pgClient = new pg.Client(conString);
let ID,UserId , from_mail,to_email,to_name,cc_email,cc_name,subject=null,mailbody,eventt;
pgClient.connect(function(err) {
  console.log('connection successfull');
});
  
app.get('/', (req, res) => {
	res.send("html");
});

app.post('/demo-hook', (req, res) => {
	console.log(req.body);
	ID=req.body.id;
	UserId=req.body.userId;
	to_email=req.body.to[0].email;
	to_name=req.body.to[0].name;
	from_email=req.body.from.email;
	from_name=req.body.from.name;
	if(req.body.subject){
	subject=req.body.subject;}
	eventt=req.body.eventName;
	mailbody=req.body.plaintextBody;
	
	console.log(ID+","+UserId+" ,"+from_email+","+from_name+","+to_email+","+to_name+","+subject+","+mailbody+","+eventt);
	const text = 'INSERT INTO email_table(ID,UserId , from_email,from_name,to_email,to_name,subject,mailbody,eventt) VALUES($1, $2, $3, $4, $5, $6, $7, $8 ,$9)'
	const values = [ID,UserId , from_email,from_name,to_email,to_name,subject,mailbody,eventt];
    
        pgClient.query(text, values, function(err, result) {
          if(err) {
            return console.error('error running insert query-insertquery', err);
          }
          //console.log('insert query');
          
        });
	
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))