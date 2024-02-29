import express from 'express'
import {updateRent, returnFilm} from '../controllers/rent.js'

const router = express.Router()

router.post("/", updateRent)

router.delete("/:rental_id", returnFilm)

export default router