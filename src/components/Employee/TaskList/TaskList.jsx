import React, { useEffect, useState } from 'react'
import AccesptTask from './AccesptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import SetLocalStorage from '../../../lib/SetLocalStorage'

function TaskList({ User , taskAccept , completeTask , failedTask}) {

// console.log(User, 'After useEffect')

  return (

    <div id = 'taskList' className = "overflow-x-auto h-full w-full mt-10 py-5  flex items-center      justify-evenly gap-5 flex-wrap">

      {User?.tasks?.map((elem, ind) => {
        if (elem.newTask) {
          return <NewTask key={ind} User={elem} taskIndex={ind}  taskAccept = {taskAccept}/>
        } else if (elem.active) {
          return <AccesptTask key={ind} User={elem} taskIndex={ind}  completeTask = {completeTask} failedTask = {failedTask} />
        } else if (elem.completed) {
          return <CompleteTask key={ind} User={elem} />
        } else if (elem.failed) {
          return <FailedTask key={ind} User={elem} />
        }
        return null
      })}

    </div>
  )
}

export default TaskList
