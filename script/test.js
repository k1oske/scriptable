var fs = require('fs');
var jsonfile = fs.readFileSync("config.json")
var obj = JSON.parse(jsonfile)
console.log(obj.user[0])

var data = {
  user: []
};

data.user.push({name: "Lukas", password: "luki"})

fs.writeFile ("config.json", JSON.stringify(data), err => {
  if (err) throw err
  console.log('complete')
  }
);