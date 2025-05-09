const mongoose = require('mongoose');

const CarListSchema = new mongoose.Schema({
    carName: {type: String,required: true,}
,
    carModel: {
        type: Date,required: true,

    },
    description: {
    type: String},
    carImage: {
        type: String, // Store image URL or path
        required: true
},
price: {type: Number,required: true,min: 0}
,
});

module.exports = mongoose.model('CarList', CarListSchema);
