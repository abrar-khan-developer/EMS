import React, { useEffect, useState } from 'react'
import GetLocalStorage from '../lib/GetLocalStorage'
import Header from '../components/Admin/Header'
import AllUsersTasksShow from '../components/Admin/AllUsersTasksShow'

function Admin() {
// role: "employee",
  const [User, setUser] = useState(null)

  useEffect(() => {
    
    const LocalUser = GetLocalStorage()
    // console.log(LocalUser,"localStorage user")
    if(LocalUser) {
      setUser(LocalUser)
    }

  },[])


  return (
    <>
      <Header User = {User}/>
      <AllUsersTasksShow />
    </>
  )
}

export default Admin
