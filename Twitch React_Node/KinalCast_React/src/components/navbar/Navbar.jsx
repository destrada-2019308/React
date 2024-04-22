import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUserDetails } from "../../shared/hooks/useUserDetails"

const NavButton = ({ text, onClickHandler}) =>{
    return(
        <span className="nav-button" onClick={onClickHandler}>
            {text}
        </span>
    )
}

export const Navbar = () => {
    
    const [isLogged, logoutSys] = useUserDetails()
    const navigate = useNavigate()

    const handleLogout = () =>{
        logoutSys()
    }

  return (
    <div className="nav-container">
        <div className="nav-buttons-container">
            <NavButton text='Browse'/>
            {
                !isLogged ?(
                    <NavButton  text='Login'/>
                ) : (
                    <div>
                        <NavButton text='Acount'/>
                        <NavButton text='LogOut' onClickHandler={handleLogout}/>  
                    </div> 
                )
            }
        </div>
    </div>
  )
}
