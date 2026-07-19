import React, { useEffect, useState } from 'react';
import GetLocalStorage from '../lib/GetLocalStorage'
import Header from '../components/Admin/Header';
import TaskListNumber from '../components/Employee/TaskListNumber';
import TaskList from '../components/Employee/TaskList/TaskList';
import SetLocalStorage from '../lib/SetLocalStorage';

function Employee() {
  const [User, setUser] = useState(null)
  const [profile , setProfile] = useState(null)

  useEffect(() => {
    
    const LocalUser = GetLocalStorage()
    if(LocalUser) {
      setUser(LocalUser)
    }
    setProfile(LocalUser)

  },[])

 useEffect(() => {
    
    const LocalUser = GetLocalStorage()
    if(LocalUser) {
      setUser(LocalUser)
    }

  },[profile])



  return (
    <div>
      <Header User={User}/>
      <TaskListNumber data={User} />
      <TaskList User = {User} setProfile = {setProfile} profile = {profile}/>
    </div>
  )
}

export default Employee
