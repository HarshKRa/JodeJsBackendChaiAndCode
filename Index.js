// console.log("Harsh")

require('dotenv').config()

const express = require('express')
// import express from 'express'; // both line are same 
// express is object

const app = express()
// It is a vriable of express object

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
  res.send("harsh@28u7y930i")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login here for better expriancec</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send('<h2>Welcome Harsh</h2>')
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
  })