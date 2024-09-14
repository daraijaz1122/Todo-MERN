require('dotenv').config();

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)

const TodoSchema = new mongoose.Schema({ 
    description: String,
    completed: { type: Boolean, default: false },
    completed_at:{type:Date , default:null},
    created_at: { type: Date, default: Date.now }
})
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    Todo
}