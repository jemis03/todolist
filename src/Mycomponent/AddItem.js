import React, { useState } from 'react'

const AddItem = ({addTodo}) => {
    const[title, setTitle]=useState("");
    const[desc, setDesc]=useState("");

    const submit=(e) =>{
        e.preventDefault();
        if (!title || !desc) {
            alert('You do not put any form field blank');
        }
        else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>ADD Item</h3>
            <form onSubmit={submit}>
                <div className="row mb-3">
                    <label htmlFor="inputTitle" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="inputTitle"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputDesc" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="inputDesc"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default AddItem
