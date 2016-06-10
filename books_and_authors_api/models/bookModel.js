/**
 * Created by Lula on 5/31/2016.
 */
var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
var bookModel = new Schema({
    title:String,
    author:String,
    genre:String,
    read:{type:Boolean, default:false}
});

module.exports = mongoose.model("Book", bookModel);