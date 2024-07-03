const {Schema ,model} =require('mongoose')
const {extraConfig, foreignConfig, numberRequired}= require('../lib')

const Detail = model('Detil', new Schema({
  ProductId: {...foreignConfig, ref: 'Product'},
  OrderId: {...foreignConfig, ref: 'Order'},
  price: numberRequired,
  qty: numberRequired,
  total: numberRequired,
}, extraConfig))

module.exports = Detail