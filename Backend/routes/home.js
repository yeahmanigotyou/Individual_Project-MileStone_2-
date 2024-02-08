import express from "express"
import {
    getTopFiveRentedMovies,
    getTopFiveActor,
    getFilmDetail,
    getActorDetail
} from '../controllers/home.js'

const router = express.Router()

router.get('/topMovies', getTopFiveRentedMovies)

router.get('/topActors', getTopFiveActor)

router.get('/:film_id', getFilmDetail)

router.get('/', getActorDetail)

export default router