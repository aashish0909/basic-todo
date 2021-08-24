const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = "mongodb://localhost:27017/todo"
db.models = require("./model.js")

module.exports = db
