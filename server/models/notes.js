const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

const NoteSchema = mongoose.Schema({
    content: String,
    created_by: ObjectId,
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);