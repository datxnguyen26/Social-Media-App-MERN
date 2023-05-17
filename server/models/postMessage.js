import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now     //Change from new Date to Date.now() to fix timestamp bug
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage;