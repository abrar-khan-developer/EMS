import { useState } from "react"
import Employee from "../lib/Database"
import SetLocalStorage from "../lib/SetLocalStorage"


function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [foundEmployee, setFoundEmployee] = useState(null)

  const submitHandler = (e) => {
    e.preventDefault()

    if(!email || !password) {
      alert("Please fill all the fields")
      return
    }
    
    const User = Employee.find( (obj) => {
      return obj.email === email && obj.password === password
    })

    if(!User) {
      alert("Invalid email or password")
      return
    }

    SetLocalStorage(User)
    // console.log(User,"User details")

  }

  return (
        <div className = "flex h-screen w-screen items-center justify-center">

          <div className="md:border-2 border-emerald-600 p-10 md:p-16 rounded-xl w-[90%] max-w-lg">
            <form 
              onSubmit = {(e) => submitHandler(e)}
              className = "flex flex-col items-center justify-center gap-3 md:gap-1">
                <input 
                    className = "w-full mt-4 text-black outline-none text-xl bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 placeholder:text-gray-400"  
                    required
                    type = "email" 
                    placeholder = "Enter your email"  
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    />

                <input 
                    className = "w-full mt-4 text-black outline-none text-xl bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 placeholder:text-gray-400"  
                    required
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    type = "password" 
                    placeholder = "Enter password" />

                <button className = "mt-6 w-full bg-emerald-600 text-white py-4 rounded-full hover:cursor-pointer active:bg-emerald-400 transition"> Login </button>

                <p className="mt-4 text-gray-600">
                    Don't have an account?
                  <span
                    // to="/signup"
                    className="ml-2 cursor-pointer rounded-full border border-emerald-600 px-3 py-1 font-medium text-emerald-600 transition-all duration-200 hover:bg-emerald-600 hover:text-white"
                  >
                    Sign Up
                  </span>
                </p>
                
            </form>
          </div>

        </div>
  )
}

export default Login
