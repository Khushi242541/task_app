const express=require ("express");
const router = express.Router();
const Task=require("../models/Task");
// the first 3 lines are of importing just like python importing modules 

router.post("/tasks", async(req,res)=>{
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
});  
  
router.get("/tasks", async(req,res)=>{
    console.log("data sent", req.query.name)
    const tasks=await Task.find();
    res.json(tasks);
});
router.put("/tasks/:id", async(req,res)=>{
    const tasks=await Task.findByIdAndUpdate(req.params.id, req.body,{new: true});
    res.json(task);
});
router.delete("/tasks/:id", async(req,res)=>{
    const task=  await Task.findByIdAndDelete(req.params.id);
    res.json({message:"Deleted"});
})
router
module.export=router;