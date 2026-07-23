import React, { useEffect, useState } from 'react'
import Header from '../components/Admin/Header'
import AllUsersTasksShow from '../components/Admin/AllUsersTasksShow'
import TaskForm from '../components/Admin/TaskForm'

function Admin() {
// role: "employee",



  return (
    <>
      <Header  />
      <TaskForm  />
      <AllUsersTasksShow />
    </>
  )
}

export default Admin
