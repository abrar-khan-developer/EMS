import React, { useEffect, useState } from 'react';
import GetLocalStorage from '../lib/GetLocalStorage'
import Header from '../components/Admin/Header';
import TaskListNumber from '../components/Employee/TaskListNumber';
import TaskList from '../components/Employee/TaskList/TaskList';
import SetLocalStorage from '../lib/SetLocalStorage';

function Employee() {
  const [User, setUser] = useState(null)

  console.log(User?.taskCount,"Empoyee.jsx")
  // useEffect(() => {
    
  //   const LocalUser = GetLocalStorage()
  //   if(LocalUser) {
  //     setUser(LocalUser)
  //   }
  //   setProfile(LocalUser)

  // },[])

function taskAccept(ind){

  const updatedTasks = User.tasks.map((task) => {
    // console.log(ind,"employee.jsx")
    if (ind === task.serialNO) {
      return {
        ...task,
        newTask: false,
        active: true,
      };
    }

    return task;
  });

  const updatedUser = {

  ...User,
  taskCount: {
      ...User.taskCount,
      active: User.taskCount.active + 1,
  },

  tasks: updatedTasks,

  };

  setUser(updatedUser);
  SetLocalStorage(updatedUser);
}

function failedTask(ind){

  const updatedTasks = User.tasks.map((task) => {
    // console.log(ind,"employee.jsx")
    if (ind === task.serialNO) {
      return {
        ...task,
        completed: false,
        active: false,
        failed: true,
      };
    }

    return task;
  });

  const updatedUser = {
    ...User,
    taskCount: {
      ...User.taskCount,
      failed: User.taskCount.failed + 1,
    },
    tasks: updatedTasks,
  };

  setUser(updatedUser);
  SetLocalStorage(updatedUser);
}

function completeTask(ind){

  const updatedTasks = User.tasks.map((task) => {
    console.log(ind,"employee.jsx")
    if (ind === task.serialNO) {
      return {
        ...task,
        failed: false,
        active: false,
        completed: true,
      };
    }

    return task;
  });

  const updatedUser = {
    ...User,
      taskCount: {
      ...User.taskCount,
      completed: User.taskCount.completed + 1,
    },
    tasks: updatedTasks,
  };

  setUser(updatedUser);
  SetLocalStorage(updatedUser);
}

 useEffect(() => {
    
    const LocalUser = GetLocalStorage()

    if(LocalUser) {
      setUser(LocalUser)
    }

  },[])



  return (
    <div>
      <Header User = {User}/>
      <TaskListNumber data = {User}  />
      <TaskList User = {User} taskAccept = {taskAccept} completeTask = {completeTask} failedTask = {failedTask}/>
    </div>
  )
}

export default Employee
