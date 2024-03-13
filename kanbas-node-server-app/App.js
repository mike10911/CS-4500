import Hello from './hello.js'
import Lab5 from './Lab5.js'
import express from 'express'

const app = express()
Hello(app)
Lab5(app)
app.listen(4000)
console.log("Server is running on port 4000")