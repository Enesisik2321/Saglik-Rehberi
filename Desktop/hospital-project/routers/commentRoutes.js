import express from "express"
import commentControllers from "../controllers/commentControllers.js"
const router = express.Router()

router.route("/create/:doctorId").post(commentControllers.createComment)
router.route("/get").get(commentControllers.getComments)

export default router
