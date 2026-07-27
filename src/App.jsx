import { useEffect, useState } from "react";
import Admin from "./pages/Admin"
import Employee from "./pages/Employee"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GetLocalStorage from '../src/lib/GetLocalStorage'
import SetLocalStorage from "./lib/SetLocalStorage";

function App() {

   const [User, setUser] = useState(null)

    useEffect(() => {
    
    const LocalUser = GetLocalStorage()

    if(LocalUser) {
      setUser(LocalUser)
    }

  },[])

  return (
      <>
        <Router>
 
           <Routes>
              <Route path="/" element={ User ? 
                  User?.role == 'admin' ? <Admin User = {User} setUser = {setUser}/> 
                  : <Employee User = {User} setUser = {setUser}/> 
                : <Login  setUser = {setUser} /> }  />
              <Route path="/register" element={ <SignUp />} />
              {/* <Route path="/" element={<h1>hello home /</h1>} /> */}
           </Routes>
        </Router>
      </>
  )
}

export default App
