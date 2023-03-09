import React, { useState } from 'react';
import './index.css'

const TodoAdd = (props) => {

    const [task, setTask] = useState('text in input')

    const addNewTask = () => {
        props.onAdd(task)
    }

    return (
        <div>
            <h2>{task}</h2>
            <input 
                className='myInput' 
                type='text'
                placeholder='Enter task'
                value={task}
                onChange={event => setTask(event.target.value)}
            />
            <button 
                className='button_Add' 
                onClick={addNewTask}
                >
                    Add
                </button>
        </div>
    );
}

export default TodoAdd;