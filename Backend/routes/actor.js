import express from 'express'
import {
    getActors,
    getActor
} from '../controllers/actor.js'
import { getTopFiveActor } from '../controllers/home.js'

const router = express.Router()

router.get("/", getActors)

router.get('/:actor_id', getActor)

router.get('/actorTopFive', getTopFiveActor)

export default router