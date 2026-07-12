export default function  GetLocalStorage() {

    const jsonValue = localStorage.getItem("User")
    // console.log('hello',jsonValue)
    if (jsonValue != null){
        // console.log(jsonValue,"get function of localStorage")
         return JSON.parse(jsonValue)
    }    
}