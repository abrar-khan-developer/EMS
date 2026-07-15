import React from 'react'

function Header({ User }) {

    console.log(User,"From Header")

    const userLogOut = () => {
        localStorage.removeItem("User");
        //  localStorage.clear()
    }

 return (
    <div className = "flex items-end justify-between text-white bg-black p-5">
      <h1 className="text-xl sm:text-2xl font-medium">Hello <br /> <span className = "text-2xl sm:text-3xl font-semibold">{User && User.role == "employee" ? User.firstName : "Amin"} 👋</span>  </h1>
      <button 
        className='bg-red-600 text-lg font-medium rounded-sm  px-5 py-2 hover:cursor-pointer active:bg-red-400'
        onClick={userLogOut}
      >Log Out</button>
    </div>
  )
}

export default Header
