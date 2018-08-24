const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    bussid: String,
    count: Number
});
module.exports = mongoose.model('Food', foodSchema);
