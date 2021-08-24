const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

// const cors = require("cors")
app.use(cors())

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
	res.json({ message: "Welcome to the REST API" })
})
app.use("/api", require("./routes/api"))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
	console.log("Server running on port : 4000")
})

const db = require("./db/server")
db.mongoose
	.connect(db.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to the database")
	})
	.catch((err) => {
		console.log("Cannot connect to the database!", err)
		process.exit()
	})
