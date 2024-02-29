import express from 'express'
import { getHistory } from '../controllers/history.js'

const router = express.Router()

router.get("/:customer_id", getHistory)

export default router