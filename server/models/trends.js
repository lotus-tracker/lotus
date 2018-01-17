const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TrendsSchema = new Schema({
    mood: {
        type: String,
        unique: true
    }
});
const Trends = mongoose.model("Trends", TrendsSchema);

module.exports = Trends;