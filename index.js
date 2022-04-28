const express = require("express");
const axios = require('axios').default;
const app = express();

const port = process.env.PORT | 4000 ;

app.get("/v1/posts", async (req, res) => {
	axios.get("https://raw.githubusercontent.com/silicone-server/dgc/main/blog.json")
	.then(data => {
		const json = data.data;
		res.send(json)
		// res.send(data);
	});
})


app.get("/v1/posts/:id", async (req, res) => {
	const id = req.params.id

	axios.get("https://raw.githubusercontent.com/silicone-server/dgc/main/blog.json")
	.then(data => {
		const json = data.data;
		res.send(json["posts"][id])
		// res.send(data);
	});
})

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)		
})