import express from 'express'
import {updateRent} from '../controllers/rent.js'

const router = express.Router()

router.post("/", updateRent)

export default router