import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Add_todo, Delete_todo, View_todo } from '../Redux/Action/TodoAction';


const Add = () => {

    const [list,setList] = useState();

    const dispatch = useDispatch()
    const hendleSubmit =(e) =>{
        e.preventDefault();
        let obj ={
            list,
        }
        dispatch(Add_todo(obj));
        setList('')
    } 

    const AllTodos = useSelector(state => state.todo.TodoList)

    useEffect(()=>{
        dispatch(View_todo())
    },[])

    const hendleDelete =( id) =>{

        dispatch(Delete_todo(id));
        alert("Delet...")
    }

  return (
    <>
    <div className=' w-50  mt-5 p-3'>
      <h2 className='bg-info-subtle p-2'>Todo List</h2>
      <div className='mt-4'>
        <form className='d-flex' action="" onSubmit={hendleSubmit} >
            <input type="text" className=' w-100 ps-2' placeholder='Add a Todo..' onChange={(e) => setList(e.target.value)} value={list || " "} />
            <button type="submit" className='btn bg-info'>submit</button>
        </form>
      </div>

      <div className='bg-info-subtle mt-4 p-4 rounded-4'>
         <ul className='p-0 m-0'>
           {
            AllTodos.map((item,index) => {
                return(
                    <li key={index} className='d-flex justify-content-between p-2'>
                    <h4 className='p-0 m-0 w-50 d-flex flex-start'>{item.list}</h4>
                <button className='btn bg-info' onClick={() => hendleDelete(item.id)}>Remove</button>
                </li>
                )
            })
           }
         </ul>
      </div>
   
      
    </div>
    </>
  )
}

export default Add
