import * as express from 'express'
import * as bodyParser from 'body-parser'
const app = express()

import routes from './routes'

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use('/', routes)

export default app
