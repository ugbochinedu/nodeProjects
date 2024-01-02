const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

//middleware
app.use(express.json())

//routes
app.get('/hello', (req, res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)


const port = 4000;

app.listen(port, console.log(`serving is listening on port ${port}`))