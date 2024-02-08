import express from "express"
import {
    getFilm,
    getFilms,
    createFilm,
    updateFilm,
    deleteFilm
} from '../controllers/film.js'

const router = express.Router()

router.get("/", getFilms)

router.get('/:film_id', getFilm)

router.post("/", createFilm)

router.put('/:film_id', updateFilm)

router.delete('/:film_id', deleteFilm)

export default router