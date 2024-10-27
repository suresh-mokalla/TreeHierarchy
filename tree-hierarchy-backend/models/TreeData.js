// backend/models/TreeData.js
const mongoose = require('mongoose');

const treeDataSchema = new mongoose.Schema({
    personalDetails: {
        name: String,
        age: Number,
        gender: String,
        address: {
            village: String,
            city: String,
            district: String,
            state: String,
            pincode: Number,
            country: String
        }
    },
    phoneNumbers: [String]
});

module.exports = mongoose.model('TreeData', treeDataSchema);
