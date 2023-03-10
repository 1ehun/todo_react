import React from 'react';
import './index.css'
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

    const moveOnTodo = () => {
        console.log('zaebis')
    }

    const moveOnProgress = () => {
        console.log('zaebis')
    }

    const moveOnDone = () => {
        console.log('zaebis')
    }

    const removeTask = (testitem) => {
        console.log(testitem);
    }
    
    return (
        <div className='todo-desk'>
            <div className='todo-desk-field'>
                <h3>Todo tasks</h3>
                <hr className='todo-desk-hr'/>
                {todoTasks.map((item) => (
                    <div className='todo-task'>
                        {/* {item.status = 'todo'} */}
                        <div style={{width: '100%'}}>
                            <p style={{display: 'contents'}}>
                                {/* {item.task} */}
                            </p>
                            <div className='dropdown'>
                                <button className='drop-btn'>move</button>
                                <div className='dropdown-content'>
                                    <h6 
                                    style={{cursor: "pointer"}}
                                    onClick={moveOnTodo}
                                    >On todo</h6>
                                    <h6 
                                    style={{cursor: "pointer"}}
                                    onClick={moveOnProgress}
                                    >On progress</h6>
                                    <h6 
                                    style={{cursor: "pointer"}}
                                    onClick={moveOnDone}>On done</h6>
                                     <h6 
                                    style={{cursor: "pointer"}}
                                    onClick={() => {
                                        console.log(item.status)
                                        item.status = 'inProgress'
                                        console.log(item.status)
                                    }}>Delete task</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}</div>
            <div className='todo-desk-field'>
                <h3>Tasks in progress</h3>
                <hr className='todo-desk-hr'/>
                {inProgressTasks.map((item) => (
                    <div className='todo-task'>{item.task}</div>
            ))}</div>
            <div className='todo-desk-field'>
                <h3 className='todo-desk-line'>Done tasks</h3>
                <hr className='todo-desk-hr'/>
                {doneTasks.map((item) => (
                    <div className='todo-task'>{item.task}</div>
            ))}</div>
        </div>
    );
}

export default TodoDesk;