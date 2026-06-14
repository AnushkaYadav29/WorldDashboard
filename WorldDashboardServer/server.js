const express=require("express");
require('dotenv').config();
const dashboardRoutes=require('./Routes/DashboardRoutes')
const db=require('./config/db')
const cors=require('cors')

const app=express();

const port=process.env.PORT || 5003

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send("Server is started")
})
app.use('/dashboard',dashboardRoutes)





app.listen(port,()=>{
    console.log(`Server running on http:localhost:${port}`)

})