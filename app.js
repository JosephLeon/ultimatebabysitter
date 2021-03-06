const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')
const helmet = require('helmet')
const RateLimit = require('express-rate-limit')
const expressSanitizer = require('express-sanitizer')
const compression = require('compression')

require('dotenv').config()

app.use(compression())
app.use(helmet())

// limit requests
var limiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  delayMs: 0 // disable delaying - full speed until the max limit is reached
})
//  apply to all requests
app.use(limiter)

var verifyLimiter = new RateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  delayMs: 0 // disabled
})
app.use('/users/verify/', verifyLimiter)

var authLimiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // limit each IP to 100 requests per windowMs
  delayMs: 0 // disable delaying - full speed until the max limit is reached
})
app.use('/users/authenticate/', authLimiter)

// routes
const userRoutes = require('./api/routes/users.js')
const ratingRoutes = require('./api/routes/ratings.js')
const uploadRoutes = require('./api/routes/uploads.js')

// config
const config = require('./_config')

// connect to mongodb
if (process.env.HEROKU) {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect(config.mongoURI[app.settings.env], function (err, res) {
    if (err) {
      console.log('Error connecting to the database. ' + err)
    } else {
      console.log('Connected to Database: ' + config.mongoURI[app.settings.env] + '\n')
    }
  })
}

// misc
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Mount express-sanitizer here
app.use(expressSanitizer())

// cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }
  next()
})

// routes
app.use('/users', userRoutes)
app.use('/ratings', ratingRoutes)
app.use('/upload', uploadRoutes)

// error catching
app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
})

// server
const port = process.env.PORT || 3000
const server = http.createServer(app)
if (!module.parent) {
  server.listen(port)
}

module.exports = app
