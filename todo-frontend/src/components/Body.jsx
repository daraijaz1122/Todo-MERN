import React, { useState } from 'react'
import ViewTodos from './ViewTodos'
import useGetTodos from '../hooks/useGetTodos'
import axios from 'axios';
import { ApiConstants } from '../utils/Constants';
import { toast } from 'react-toastify';

const Body = () => {
  const [description, setDescription] = useState("");
  const data = useGetTodos()

  const handleSubmit = async () => {
    const response = await axios.post(ApiConstants.ADD_TODO, {description})
    toast.success(response.data.message)
  }
  return (
    <div className='mx-24 pt-4'>
      <div className='font-sans py-3  font-bold '> Add Todo</div>
       <div> 


        <div>
  

  <div
    className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
  >
            <textarea
           onChange={(e)=>setDescription(e.target.value)}   
      id="OrderNotes"
      className="w-full p-4 resize-none border-none align-top focus:ring-0 sm:text-sm"
      rows="4"
      placeholder="Add a todo"
    ></textarea>

    <div className="flex items-center justify-end gap-2 bg-white p-3">
             

              <button
                onClick={handleSubmit}
        type="button"
        className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
      >
        Add
      </button>
    </div>
  </div>
        </div>
      </div>
      <ViewTodos todoData={data} />
    </div>
  )
}

export default Body