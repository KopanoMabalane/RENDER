const http = require('http')
const { hostname } = require('os')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const server = http.createServer(app)
server.listen(port,hostname => {
    console.log("Listening on PORT 5000")
})
