import React, { useEffect, useState } from 'react'

function AccesptTask({ User , taskIndex , failedTask , completeTask }) {

    // console.log(User,'AccesptTask')
    useEffect(() => {
        // setUser(User)
        // console.log(User,"Accept component useEffect")
    }, [])
    
    function taskComplete(){

        // setUser((pre) => {
        //     return {
        //     ...pre,
        //     completed :true,
        //     active: false
        //     }
        // })

    }
    function taskFail(){

        // setUser((pre) => {
        //     return {
        //     ...pre,
        //     failed :true,
        //     active: false
        //     }
        // })

    }

  return (
      <div className = " h-full w-75 rounded-xl bg-red-400 p-5">

            <div className = 'flex justify-between items-center'>
                <h3 className = "bg-white px-3 py-1 rounded text-xs sm:text-sm"> {User.category} </h3>
                <h4 className = 'text-sm'>{User.taskDate}</h4>
            </div>

            <h2 className = 'text-2xl font-semibold mt-5'>{User.taskTitle}</h2>
            <p className = 'text-sm mt-2'>{User.taskDescription}</p>

            <div className='flex justify-between mt-4 '>
                <button 
                    className='bg-green-500 py-1 px-2 text-sm hover:cursor-pointer active:bg-green-300'
                    onClick={() => completeTask(taskIndex)}
                    >Mark as Completed</button>
                <button 
                    className='bg-red-500 py-1 px-2 text-sm hover:cursor-pointer active:bg-green-300'
                    onClick={() => failedTask(taskIndex)}
                    >Mark as Failed</button>
            </div>
      </div>
  )
}

export default AccesptTask
