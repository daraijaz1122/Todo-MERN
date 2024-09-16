//const express = require('express')
const { Todo } = require("../db");
const { z } = require("zod");
const { Router } = require("express");
const router = Router();


router.post('/create', (req, res) => {
    const description = req.body.description;
    Todo.create({
        description
    })
    res.json({
        message: 'Todo created successfully'
    })
})
router.get('/fetchAll', async(req, res) => {
    const response = await Todo.find({})
    res.json({
        todos:response
    })
})
router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
   await Todo.findByIdAndDelete(id)
    res.json({
        message: 'Todo deleted successfully'
    })
})
router.post('/markCompleted/:Id', async (req, res) => {
    const id = req.params.Id;
    console.log(id)
    await Todo.updateOne({ _id: id  },
        {
            "$set": {
                completed: true,
                completed_at: Date.now()
            }
        }
    )
    res.json({
        message:"Todo completed!"
    })
})
module.exports = router;