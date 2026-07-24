import React, { useEffect, useState } from 'react'
import Header from '../components/Admin/Header'
import AllUsersTasksShow from '../components/Admin/AllUsersTasksShow'
import TaskForm from '../components/Admin/TaskForm'

function Admin({ User ,  setUser }) {
// role: "employee",



  return (
    <>
      <Header setUser = {setUser} />
      <TaskForm  User = {User} />
      <AllUsersTasksShow User = { User } />
    </>
  )
}

export default Admin
