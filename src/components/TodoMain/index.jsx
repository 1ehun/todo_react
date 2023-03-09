import React, { useState } from 'react';
import TodoAdd from '../TodoAdd';
import TodoDesk from '../TodoDesk';
import './index.css'

export const TASK_STATUSES = {
    todo: "todo",
    inProgress: "inProgress",
    done: "done"
}


const TodoMain = (props) => {

    const [taskList, setTaskList] = useState([])

    const addTodoTaskPost = (task) => {
        setTaskList((prevList) => [
            ...prevList,
            {
                id: Date.now(),
                task: task,
                status: TASK_STATUSES.todo 
            }
        ])
        // console.log(taskList)
    }

    return (
        <div>
            <TodoAdd 
                onAdd={addTodoTaskPost}
            />
            <TodoDesk 
            taskListProp={taskList}
            />
        </div>
    )
}

export default TodoMain