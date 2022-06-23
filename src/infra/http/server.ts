import express from 'express'
import cors from 'cors'
import { routes } from './routes'
import { initiFirebaseApp } from '../firebase'

initiFirebaseApp()

const app = express()
const port = process.env.PORT || 8888

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => {
	console.log('Server is running')
})