import express from "express"
import cors from "cors"
import filmRoutes from "./routes/film.js"
import customerRoutes from "./routes/customer.js"
import homeRoutes from "./routes/home.js"
import actorRoutes from "./routes/actor.js"
import rentRoutes from "./routes/rent.js"
import historyRoutes from "./routes/history.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use("/Backend/film", filmRoutes)
app.use("/Backend/customer", customerRoutes)
app.use("/Backend/home", homeRoutes)
app.use("/Backend/actor", actorRoutes)
app.use("/Backend/rent", rentRoutes)
app.use("/Backend/history", historyRoutes)


app.listen(8800, ()=> {
    console.log("Listening...");
})