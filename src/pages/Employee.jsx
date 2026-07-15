import React, { useEffect, useState } from 'react';
import GetLocalStorage from '../lib/GetLocalStorage'
import Header from '../components/Admin/Header';
import TaskListNumber from '../components/Employee/TaskListNumber';

function Employee() {
  const [User, setUser] = useState(null)

  useEffect(() => {
    
    const LocalUser = GetLocalStorage()
    // console.log(LocalUser,"localStorage user")
    if(LocalUser) {
      setUser(LocalUser)
    }

  },[])

  return (
    <div>
      <Header User={User}/>
      <TaskListNumber data={User}/>
    </div>
  )
}

export default Employee
