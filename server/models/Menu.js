const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String },
    availability: { type: Boolean, default: true },
});

module.exports = mongoose.model('Menu', menuSchema);
