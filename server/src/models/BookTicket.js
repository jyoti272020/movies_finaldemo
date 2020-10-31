const mongoose = require('mongoose');


 BookTicket = mongoose.model('Ticket',{
     name:String,
     amount:String
})

module.exports = BookTicket

