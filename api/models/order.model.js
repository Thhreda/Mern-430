const {Schema, model} =require('mongoose')
const {extraConfig, foreignConfig}=require('../lib')

const Order = model('Order', new Schema({
  userId:{...foreignConfig, ref: 'User'},
  status:{type: String, enum:[ 'Processing','Confirmed', 'Shipping', 'Delivered', 'Cancelled'], default: 'Procssing'},
}, extraConfig))

module.exports = Order