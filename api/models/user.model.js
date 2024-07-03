const {Schema ,model} =require('mongoose')
const {stringRequired,booleanTrue,extraConfig}= require('../lib')
// const userSchema = new Schema({
//   name: {type :String, required: true},
//   email: {type :String, required: true, unique: true},
//   password: {type :String, required: true},
//   phone: {type :String, required: true, maxLength :30},
//   address: {type :String, required: true},
//   role: {type :String, enum:['Admin','Staff','Customer'], default :'Customer'},
//   status: {type :Boolean, default: true} 
// },{
//   timestamps:true,    // 2 wota date time fix garxa (created ra updated 2 wota) mongoose le grxa yo kam chai
//   autoIndex:true,     //key haru banayerw rakhxa automatically (like foreign key,index key)
//   autoCreate:true,    //forcefully collection create grxa database ma
// })
const User = model('User', new Schema({
  name: stringRequired,
  email: {...stringRequired, unique: true},
  password: stringRequired,
  phone: {...stringRequired, maxLength :30},
  address: stringRequired,
  role: {type :String, enum:['Admin','Staff','Customer'], default :'Customer'},
  status: booleanTrue,
}, extraConfig))

module.exports = User