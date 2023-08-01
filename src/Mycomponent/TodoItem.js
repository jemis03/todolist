import React from 'react'

const TodoItem = ({todoitem,onDelete}) => {
  return (
    <div>
      <h4>{todoitem.title}</h4>
      <p>{todoitem.desc}</p>
      <button type="button" className="btn btn-danger bg-sm" onClick={
        ()=>{onDelete(todoitem)}}>Delete</button>
    </div>
  )
}

export default TodoItem
