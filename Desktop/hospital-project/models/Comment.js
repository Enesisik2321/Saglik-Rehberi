import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  doctorId: {
    type: String,
  },
});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
