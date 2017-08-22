
let express = require("express")

let app = express()

app.get("/save/saveToDo", (req, res) => {
	res.header("Access-control-Allow-Origin", "*")
	// res.send(JSON.stringify(req))
	console.log(req)
})





app.listen("8086")