const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    name: { type: String, required: true },
    preview: { type: String, required: true },
    image: { type: String, required: true },
    sections: [{
        title: { type: String, required: true },
        content: { type: String, required: true },
    }],
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports= mongoose.model('Post',PostSchema);