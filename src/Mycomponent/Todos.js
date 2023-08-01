import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  let todostyle={
    minHeight:"60vh",
  }
  return (
    <div className="container my-4" style={todostyle}>
      <h3>TodoList</h3>
      {props.todoitems.length===0?"NO Record Found":
      props.todoitems.map((todoitem)=>{
        return (<><TodoItem key={todoitem.sno} todoitem={todoitem} onDelete={props.onDelete}/><hr/></>)
      })}
      
    </div>
  )
}

export default Todos
// 