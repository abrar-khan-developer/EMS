import React, { useEffect, useState } from 'react';
import GetLocalStorage from '../lib/GetLocalStorage'
import Header from '../components/Admin/Header';
import TaskListNumber from '../components/Employee/TaskListNumber';
import TaskList from '../components/Employee/TaskList/TaskList';
import SetLocalStorage from '../lib/SetLocalStorage';

function Employee() {
  const [User, setUser] = useState(null)
  const [data, setData] = useState(null)


useEffect(() => {
  SetLocalStorage(data)

  const LocalUser = GetLocalStorage()
    // console.log(LocalUser,"localStorage user")
    if(LocalUser) {
      setUser(LocalUser)
      console.log(LocalUser,"get varibale from localstorage")
    }

},[data])

  useEffect(() => {
    
    const LocalUser = GetLocalStorage()
    if(LocalUser) {
      setUser(LocalUser)
    }

  },[])

  return (
    <div>
      <Header User={User}/>
      <TaskListNumber data={User}/>
      <TaskList User = {User}/>
    </div>
  )
}

export default Employee
