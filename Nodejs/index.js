require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const authRouter = require('./models/routes/auth')
const postRouter = require('./models/routes/post')
const cors = require('cors')

//connect mongodb server
const connectDB = async () => {
  try {
    mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mydb.fldonuh.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })

    console.log('MongoDB connected')
  } catch (error) {
    console.log('Error connecting to MongoDB')
    process.exit(1)
  }
}

 
app.use(express.json())
app.use(cors())
app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)

app.get('/', (req, res) => {
  res.send('APP IS RUNNING')
})

const PORT = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 
connectDB()