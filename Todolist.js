import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import List from './List'
import './Style.css'

const Todolist = () => {
    const [text,setText] = useState('')
    const [todolist, setTodolist] = useState([])

const addItem = ()=>{
    const newTodoItem ={
        id:uuidv4(),
        item: text,
        done: false
    }
    setTodolist([...todolist,newTodoItem]);
    setText('');
}
const handleToggle = (itemId)=>{
   const newTodolist = todolist.map((listItem)=>{
        if (listItem.id=== itemId) {
            return{...listItem, done : !listItem.done}
        }
        return listItem;
    })
    setTodolist(newTodolist)
}
const handleDelete = (itemId)=>{
    const newTodolist = todolist.filter((listItem)=>listItem.id !==itemId)
    setTodolist(newTodolist)
}
  return (
    <>
    <div className="App">
        <h1>To Do List</h1>
        <div className="adder">
            <input type="text" className='' placeholder='Add items'value={text} onChange={(e)=>setText(e.target.value)} />
            <span  onClick={addItem}>
                +
            </span>
        </div>
       {todolist.length >0 && (<List todolist={todolist} handleToggle={handleToggle} handleDelete={handleDelete}/>)}
    </div>
    </>
  )
}

export default Todolist