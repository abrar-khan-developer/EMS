

export default function SetLocalStorage(initialValue) {
 
    if(initialValue) {
      localStorage.setItem("User", JSON.stringify(initialValue))
    }

}
