import React, { useEffect, useState } from 'react'

function NewTask({ User,setData }) {
  
      // const [User, setUser] = useState(User)
       useEffect(() => {
        setData(User)
//         console.log(User,"NewTask component useEffect")
//         active
// : 
// true
// category
// : 
// "Design"
// completed
// : 
// false
// failed
// : 
// false
// newTask
// : 
// true
// taskDate
// : 
// "2026-06-25"
// taskDescription
// : 
// "Create responsive homepage UI"
// taskTitle
// : 
// "Design Homepage"
    }, [])
      // console.log(User)
      
function taskAccept(){
  setData((pre) => {
    return {
      ...pre,
      newTask :false,
      active: true
    }

  })
}
  return (

    <div className = "h-full w-75 rounded-xl bg-green-400 p-5">

        <div className = 'flex justify-between items-center'>
            <h3 className = "bg-white px-3 py-1 rounded text-xs sm:text-sm"> {User.category} </h3>
            <h4 className = 'text-sm'>{User.taskDate}</h4>
        </div>

        <h2 className = 'text-2xl font-semibold mt-5'>{User.taskTitle}</h2>
        <p className = 'text-sm mt-2'>{User.taskDescription}</p>

        <div className='mt-4'>
            <button 
              className='w-full bg-amber-600 hover:cursor-pointer active:bg-amber-400'
              onClick={() => taskAccept()}
              > Accept Task </button>
        </div>
    </div>
  )
}

export default NewTask
