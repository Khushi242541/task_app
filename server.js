const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const taskRoutes=require("./routes/taskroutes");

const app=express();
app.use(cors());
app.use(express.json());
app.use("/api", taskRoutes)

mongoose.connect('mongodb://localhost:27017/taskdb')
  .then(() => app.listen(5000, () => console.log('Server started on port 5000')))
  .catch(err => console.error(err));

