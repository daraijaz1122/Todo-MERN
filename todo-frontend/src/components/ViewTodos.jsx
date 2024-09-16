import React from 'react'
import axios from 'axios';
import {toast} from "react-toastify"
import { ApiConstants } from '../utils/Constants'
const ViewTodos = ({todoData}) => {
  const handleMarkComplete = async(id) => {
    const response = await axios.post(ApiConstants.MARK_TODO_COMPLETED + id)
    toast.success(response.data.message)
  }
  const handleDeleteTodo = async (id) => {
    const response = await axios.delete(ApiConstants.DELETE_TODO + id)
    toast.success(response.data.message)
  }
  return (
      <div>
         
      <ul className='mt-4'>
        {
          todoData.map((todo) => 
          (
            <div key={todo._id}
            className='py-4 flex justify-between shadow-lg rounded-md bg-green-200 mb-4 px-4 font-semibold font-sans hover:bg-blue-300'
            >
            <li
            className='my-auto'
              > {todo.description}</li>
              <div className='flex justify-between'>
                {todo.completed == false ? (
                  <button onClick={()=>handleMarkComplete(todo._id)} type='button' className='mx-2 bg-slate-300 px-2 py-2 rounded-md hover:bg-orange-300'> Mark Completed </button>
                ) : (
                  <button disabled className='mx-2  bg-slate-500 px-2 py-2 rounded-md'>Completed</button>)}
                <button onClick={()=>handleDeleteTodo(todo._id)} className='mx-2  bg-slate-300 px-2 py-2 rounded-md hover:bg-orange-300'>Delete </button>
              </div>
            
            </div>
          )
          )
        }
             
          </ul>
    </div>
  )
}

export default ViewTodos