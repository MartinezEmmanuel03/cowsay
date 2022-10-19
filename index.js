const info = require('./information.js')
let cowsay = require("cowsay");

console.log(cowsay.say({ text: `i'm ${info.name} from ${info.campus}` }
))