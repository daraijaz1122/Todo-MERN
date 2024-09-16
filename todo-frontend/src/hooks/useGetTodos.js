import {useEffect, useState} from 'react'
import { ApiConstants } from '../utils/Constants';

const useGetTodos = () => {
    const [todoData, setTodoData] = useState([]);

    useEffect(() => {
        fetchData()
    },[])
    const fetchData = async () => {
        const data = await fetch(ApiConstants.GET_TODOS);
        const jsondata = await data.json()
       
        setTodoData(jsondata.todos);
    }
   
  return  todoData
 
}

export default useGetTodos