const tasksModel = require('../models/tasksModel')

const getAll = async (req,res) => {
    const tasks =  await tasksModel.getAll()
    
    return res.status(200).json(tasks)
};

const createdTask = async(req,res)=>{
    const createdTask = await tasksModel.createTask(req.body);
    return res.status(201).json(createdTask);
}

module.exports ={
    getAll,
    createdTask,
};