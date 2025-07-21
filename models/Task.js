const moongose=require("moongose");

const taskSchemea= new mongoose.Schema({
    title: String, 
    description: String,
        completed: { type: Boolean, default:false },

});

module.exports= moongose.model("Task", taskSchema);