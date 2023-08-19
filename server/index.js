import express from "express"
import cors from "cors"
import {PORT} from './config.js'

import indexRoutes from './routes/index.routes.js'
import pacientesRoutes from './routes/pacientes.routes.js'

const app = express()

app.use(cors())
    // {origin: 'http://localhost:5173'}
app.use(express.json())

app.use(indexRoutes)
app.use(pacientesRoutes)

app.listen(PORT)
console.log(`Server losten on port ${PORT}`)