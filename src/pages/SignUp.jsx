import React from 'react'

function SignUp() {
  return (
 <div className = "flex h-screen w-screen items-center justify-center">

          <div className="border-2 border-emerald-600 p-36 rounded-xl">

            <form 
              onSubmit = {(e) => submitHandler(e)}
              className = "flex flex-col items-center justify-center"
            >

                <input 
                    className = "text-black outline-none text-xl bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 placeholder:text-gray-400"  
                    required
                    type = "email" 
                    placeholder = "Enter your email"  
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                />

                <input 
                    className = "text-black outline-none text-xl bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 mt-3 placeholder:text-gray-400"  
                    required
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    type = "password" 
                    placeholder = "Enter password" 
                />

                <button className = "mt-5 bg-emerald-600 text-white py-4 px-10 rounded-full hover:cursor-pointer active:bg-emerald-400"> Login </button>
                
            </form>
            
          </div>

        </div>

  )



}

export default SignUp
