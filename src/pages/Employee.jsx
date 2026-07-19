import React, { useEffect, useState } from 'react';
import GetLocalStorage from '../lib/GetLocalStorage'
import Header from '../components/Admin/Header';
import TaskListNumber from '../components/Employee/TaskListNumber';
import TaskList from '../components/Employee/TaskList/TaskList';
import SetLocalStorage from '../lib/SetLocalStorage';

function Employee() {
  const [User, setUser] = useState(null)
  // const [profile , setProfile] = useState(null)
  // console.log(User,"Empoyee.jsx")
  // useEffect(() => {
    
  //   const LocalUser = GetLocalStorage()
  //   if(LocalUser) {
  //     setUser(LocalUser)
  //   }
  //   setProfile(LocalUser)

  // },[])

  function taskAccept(){
   const updatedTasks = User.tasks.map((task) => ({
    ...task,
    newTask: false,
    active: true,
  }));

  const updatedUser = {
    ...User,
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
      <TaskList User = {User} taskAccept = {taskAccept}/>
    </div>
  )
}

export default Employee
