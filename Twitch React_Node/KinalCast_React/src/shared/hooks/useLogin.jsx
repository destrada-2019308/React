import { useState } from "react";
import toast from 'react-hot-toast'
import { loginRequest } from "../../services/api.js";
import { useNavigate } from "react-router-dom";


export const useLogin = () => {
    const [isLoanding, setIsLoanding] = useState(false)
    const navigate = useNavigate()

    const login = async(email, password)=>{
        const user = {email, password}
        setIsLoanding(true)
        const response = await loginRequest(user)
        setIsLoanding(false)
        if(response.error){
          console.log(response)
            return toast.error(
                response?.e?.response?.data ||
                'Error al initentar hacer login, intenta de nuevo'
            )
           
        }else{
          const { userDetails } = response.data
          localStorage.setItem('user', JSON.stringify(userDetails))
          navigate('/channels')
        }
       

    }
  return {
    login, 
    isLoanding
  }
}