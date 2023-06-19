const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 8000

require('./config/mongoose.config')

app.use(express.json(), express.urlencoded({extended: true}))

const AllAuthorRoutes = require('./routes/author.routes')
AllAuthorRoutes(app)

app.get('/', (request, response) => {response.send(`It's a me, MARIO!!!`)})
app.listen(port, () => {console.log(`Listening at http://localhost:${port}`)})