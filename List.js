import React from 'react'
import './Style.css'

export const List = ({todolist , handleToggle ,handleDelete}) => {
  return (
    <ul className='list'>
        {Array.isArray(todolist) && todolist.map((listItem)=>(
            <li key={listItem.id} className={listItem.done ? "done":""}>
                <span>{listItem.item}</span>
                <span className='actions'>
                  {
                    listItem.done ? ( <span onClick={()=>handleToggle(listItem.id)}><i className="fa-solid fa-circle-xmark"></i></span> ) : <span onClick={()=>handleToggle(listItem.id)} className=''><i className="fa-solid fa-check "></i> </span>
                  }

                <span className='px-1' onClick={()=>handleDelete(listItem.id)}> <i className="fa-solid fa-trash"></i> </span>
                </span>
            </li>
        ))}
    </ul>
  )
}

export default List