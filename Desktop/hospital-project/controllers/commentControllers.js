import Comment from "../models/Comment.js";

const createComment = async (req, res) => {
  console.log("tetiklendi")
  try {
    const { title, text, email, username} = req.body;
    const {doctorId} = req.params

    if (!title || !text || !email || !username) {
      res.status(400).json({ message: "Eksik veri girildi." });
    }

    const newComment = await Comment.create({
      title,
      username,
      text,
      email,
      doctorId,
    });

    if (!newComment) {
      res.status(404).json({ message: "Yeni yorum oluşturulamadı." });
    }
   res.redirect("/doktor-yorumlari")
  } catch (error) {
    res.status(500).json({ message: "Yorum oluşturma hatası" });
  }
};

const getComments = async (req, res) => {
  try {
    console.log("tetiklendi")
    const getComments = await Comment.find();
    res.status(200).json({ message: getComments });
  } catch (error) {
    console.log(error)
    res.status(error.code).json({ message: error.message });
  }
};

export default {
  createComment,
  getComments,
};
