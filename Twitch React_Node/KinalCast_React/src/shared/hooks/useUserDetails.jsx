import { useState } from "react"
import { useLogout } from "./useLogout"

const getUserDetails = () =>{
    const logOut = useLogout()
    const userDetails = localStorage.getItem('user')
    if(userDetails) return JSON.parse(userDetails)
    return null
}

const logoutSys = () =>{
    logOut()
}
export const useUserDetails = () => {
    const [ userDetails, setUserDetails] = useState(getUserDetails())
  return {
    isLogged: Boolean(userDetails),
    username: userDetails?.username ? userDetails.username : 'Guest',
    logoutSys 
    }
}
