import React, { useState } from "react";
import employee from "../../lib/Database";
import '../../index.css'
import SetLocalStorage from "../../lib/SetLocalStorage";

function AllUsersTasksShow({ User , setUser }) {
    // const [ role , setRole ] = useState('employee')

    function roleCahnge(e){
        // setRole(e.target.value)
        User.role = e.target.value
        console.log(User,"In AllUsersTasksShow")
        SetLocalStorage(User)
    }
  return (
    <div className="pt-5 bg-[#1c1c1c] p-3 md:p-5">

      {/* Scroll only when needed */}
      <div className="overflow-x-auto custom-scrollbar">

        {/* Minimum width so columns don't collapse */}
        <div className="min-w-175">

          {/* Header */}
          <div className="mb-2 grid grid-cols-6 items-center rounded bg-red-400 py-3 font-semibold text-white">
            <h2 className="text-center text-sm md:text-base">Employee Name</h2>
            <h2 className="text-center text-sm md:text-base">New Task</h2>
            <h2 className="text-center text-sm md:text-base">Active Task</h2>
            <h2 className="text-center text-sm md:text-base">Completed</h2>
            <h2 className="text-center text-sm md:text-base">Failed</h2>
            <h2 className="text-center text-sm md:text-base">Role</h2>
          </div>

          {/* Body */}
          <div className="space-y-5">
            {employee.map((emp) => (
              <div
                key={emp.email}
                className="grid grid-cols-6 items-center rounded bg-emerald-500 py-3 pe-2 md:pe-10"
              >
                <p className="truncate px-2 text-center text-sm font-medium md:text-base">
                  {emp.firstName}
                </p>

                <p className="text-center text-sm font-semibold text-blue-800 md:text-base">
                  {emp.taskCount.newTask}
                </p>

                <p className="text-center text-sm font-semibold text-yellow-300 md:text-base">
                  {emp.taskCount.active}
                </p>

                <p className="text-center text-sm font-semibold text-white md:text-base">
                  {emp.taskCount.completed}
                </p>

                <p className="text-center text-sm font-semibold text-red-600 md:text-base">
                  {emp.taskCount.failed}
                </p>
                <select className="text-center text-sm font-semibold text-black md:text-base outline-none "
                onChange={(e) => { roleCahnge(e)}}
                >
                  <option value="employee">Employee</option>
                  <option value="admin">Admin</option>
              </select>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default AllUsersTasksShow;