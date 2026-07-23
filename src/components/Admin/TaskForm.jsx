import React, { useState } from 'react'

function TaskForm() {
    const [taskTitle , setTaskTitle] = useState('')
    const [taskDesc , setTaskDesc] = useState('')
    const [taskDate , setTaskDate] = useState('')
    const [assignTo , setAssignTo] = useState('')
    const [taskCategory , setTaskCategory] = useState('')

    //  const [userData, setUserData] =  useContext(AuthContext)
     const [newTask , setNewTask] = useState({})
   

    const handlerSubmit = (e) => {

        e.preventDefault()

        if(taskTitle == "" || taskDesc == "" || taskDate == "" || assignTo == "" || taskCategory == ""){
            alert('All Field is required')
            return null
        }

        setNewTask({taskTitle, taskDescription : taskDesc, taskDate, assignTo, category: taskCategory, active:false, newTask:true, failed:false, completed:false  })

        // const data = userData.employees
        // data.forEach((elem) => {
        //     // console.log(elem)
        //     if(assignTo == elem.firstName){
        //         elem.tasks.push(newTask)
        //         elem.taskCount.newTask += 1
        //         // console.log('yehi h',elem)
        //     }
        // })

      
    }
  return (
     <div className='p-5 bg-[#1c1c1c] pt-7 roounded'>
            <form 
                onSubmit={(e) => handlerSubmit(e)}
                className='flex w-full flex-wrap items-start justify-between text-white'
            >
                <div className = "w-full md:w-1/2">

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input 
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            type = "text" 
                            placeholder = "Task Title"   
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                        />
                    </div>
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'> Date </h3>
                    <input 
                        value={taskDate}
                        onChange={(e) => {
                            setTaskDate(e.target.value)
                        }}
                        type = "date"  
                        className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4 "
                    />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input 
                            value={assignTo}
                            onChange={(e) => {
                                setAssignTo(e.target.value)
                            }}
                            type = "text" 
                            placeholder = "Employee Name" 
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'> Category </h3>
                        <input 
                            value={taskCategory}
                            onChange={(e) => {
                                setTaskCategory(e.target.value)
                            }}
                            type = "text" 
                            placeholder = "Design, Dev etc" 
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                        />
                    </div>

                </div>
           
                <div className='w-full md:w-1/2'>

                    <h3 className='text-sm text-gray-300 mb-0.5'> Description </h3>
                    <textarea 
                      value={taskDesc}
                        onChange={(e) => {
                            setTaskDesc(e.target.value)
                        }}
                        placeholder='Description'
                        cols = "30" 
                        rows = "10" 
                        name = "" 
                        id = "" 
                        className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
                    >

                    </textarea>
                    <button
                        className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 text-sm rounded mt-4 w-full hover:cursor-pointer active:bg-emerald-300'
                      >
                        Create Task
                    </button>
                </div>

            </form>
        </div>
  )
}

export default TaskForm
