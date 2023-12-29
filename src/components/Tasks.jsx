import React, { useEffect, useState } from 'react'
import Controllers from './Controllers';
import TaskListItem from './TaskListItem';
import TaskListHeader from './TaskListHeader';

function Tasks({ tasks, removeTask, handleComplatedTaskListener, editTask }) {


  const [priority, setPriority] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState(tasks);


  function handleFilteredTasks() {
    setPriority(prev=>!prev)
  }

  useEffect(()=> {
    setFilteredTasks(tasks)
  }, [tasks])

  useEffect(()=> {
    priority ? 
    setFilteredTasks(tasks.filter(x => x.priority === priority)) :
    setFilteredTasks(tasks)
  }, [priority]);

  return (
    <ol className="list-group list-group mb-4 p-2">
      <TaskListHeader priority={priority} handleFilteredTasks={handleFilteredTasks}/>
      {
        filteredTasks?.map(x => {
          return (
            <TaskListItem x={x} handleComplatedTaskListener={handleComplatedTaskListener} editTask={editTask} removeTask={removeTask} />
          )
        })
      }
    </ol>
  )
}

export default Tasks