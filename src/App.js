import logo from './logo.svg';
import './App.css';
import Header from './Mycomponent/Header';
import TodoItem from './Mycomponent/TodoItem';
import Todos from './Mycomponent/Todos';
import Footer from './Mycomponent/Footer';
import AddItem from './Mycomponent/AddItem';
import React, { useEffect, useState } from 'react';

function App() {
  let inittodoitem;
  if (localStorage.getItem("todoitems")===null) {
    inittodoitem=[];
  }else{
    inittodoitem=JSON.parse(localStorage.getItem('todoitems'));
  }
  const [todoitems, setTodoitems] = useState(inittodoitem);
  useEffect(()=>{
    localStorage.setItem("todoitems", JSON.stringify(todoitems));
  },[todoitems])

  const onDelete=(todoitem)=>{
    console.log('i am deleted node', todoitem);
    setTodoitems(todoitems.filter((e)=>{
      return e!==todoitem;
    }))

      localStorage.setItem("todoitems", JSON.stringify(todoitems));
  }

  const addTodo=(title,desc)=>{
    // console.log(title,desc);
    let sno;
    if (todoitems.length==0) {
      sno=sno;
    }
    else{
      sno=todoitems[todoitems.length-1].sno + 1;

    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodoitems([...todoitems,myTodo]);
    // console.log(myTodo);

    
  }

  return (
    <>
    <Header title="MyTodoList" status={true} />
    <AddItem addTodo={addTodo}/>
    <Todos todoitems={todoitems} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
