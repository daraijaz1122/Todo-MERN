import React from 'react'
import useGetTodos from '../hooks/useGetTodos'

const CompletedTodos = () => {
  const data = useGetTodos()
  const completedTodosData = data.filter((todo) => todo.completed == true);
  return (
    <div>
      <h1 className=' font-bold  text-2xl flex justify-center p-3'>Completed Todos</h1>
      <ul>
        {
          completedTodosData.map((todo) => (
            <div key={todo._id} className='mx-28 mb-4 bg-green-200 p-4 rounded-md shadow-lg font-semibold'>
              <li>Id: {todo._id}</li>
              <li>Description: {todo.description}</li>
              <li>Created At: {todo.created_at}</li>
              <li>Completed At: { todo.completed_at}</li>
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default CompletedTodos