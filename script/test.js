var fs = require('fs');
var jsonfile = fs.readFileSync("config.json")
var obj = JSON.parse(jsonfile)
console.log(obj.user[0])

var data = { // Objekt erstellem
  user: [] // leer
};
data.user.push({name: "Lukas", password: "luki"}) // döten hinzufüügenn

fs.writeFile ("config.json", JSON.stringify(data), err => {
  if (err) throw err; // wenn error passiert, nichts tun. console.log(err) auch gut
  console.log('complete'); 
  }
);