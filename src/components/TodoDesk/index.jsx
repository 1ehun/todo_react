import React from 'react';
import './index.css'
import TodoField from '../TodoField';
import {TASK_STATUSES} from '../TodoMain'
/*js doc !!!*/ 

/**
 * @typedef TodoDeskProps //создал тип данных TodoDeskProps
 * @property {Object[]} taskListProp //указали, что в этом типе будет поле taskListProp, и его тип
 */

/**
 * tasks desk
 * @param {TodoDeskProps} props 
 * @returns 
 */
const TodoDesk = (props) => {
    const todoTasks = props.taskListProp.filter((item) => 
    item.status === TASK_STATUSES.todo
    )

    const inProgressTasks = props.taskListProp.filter(item => 
    item.status === TASK_STATUSES.inProgress
    )

    const doneTasks = props.taskListProp.filter(item => 
    item.status === TASK_STATUSES.done
    )
    
    return (
        <div className='todo-desk'>
            <div>{todoTasks.map((item) => (
                <div>{item.task}</div>
            ))}</div>
            <div>{inProgressTasks}</div>
            <div>{doneTasks}</div>
        </div>
    );
}

export default TodoDesk;