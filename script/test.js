var fs = require("fs")
var config = fs.readFileSync("config.json")

var obj = JSON.parse(config)
console.log("object: " + obj.vier)