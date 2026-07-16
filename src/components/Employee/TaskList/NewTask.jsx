import React, { useState } from 'react'

function NewTask({ User }) {
  
      const [data, setData] = useState(User)
      console.log(data)
      

  return (

    <div className = "h-full w-75 rounded-xl bg-green-400 p-5">

        <div className = 'flex justify-between items-center'>
            <h3 className = "bg-white px-3 py-1 rounded text-xs sm:text-sm"> {data.category} </h3>
            <h4 className = 'text-sm'>{data.taskDate}</h4>
        </div>

        <h2 className = 'text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
        <p className = 'text-sm mt-2'>{data.taskDescription}</p>

        <div className='mt-4'>
            <button 
              className='w-full bg-amber-600 hover:cursor-pointer active:bg-amber-400'
              onClick={() => updateTaskStatus(taskIndex, 'active')}
              > Accept Task </button>
        </div>
    </div>
  )
}

export default NewTask
