require('./db/connect.jsx')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect.jsx')
require("dotenv").config()

//middleware
app.use(express.json())

//routes
// app.get('/hello', (req, res)=>{
//     res.send('Task Manager App')
// })

app.use('/api/v1/tasks', tasks)

const port = 4000;

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`serving is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()


// app.get('/api/v1/tasks')
// app.post('/api/v1/task')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/task/:id')
// app.delete('/api/v1/rask/:id')
