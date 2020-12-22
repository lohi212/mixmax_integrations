const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const PORT = 3000

app.use(bodyParser.json());
app.get('/', (req, res) => {
	res.send("html");
});

app.post('/demo-hook', (req, res) => {
	console.log(req.body);
	//req.body.
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))