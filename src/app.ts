import express from 'express'
import cors from 'cors'
import { router } from './routes'

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.disable('x-powered-by')


app.use('/api/v1',router)



app.listen(PORT, () => {
  console.log(`Server corriendo en http://localhost:${PORT}`)
})