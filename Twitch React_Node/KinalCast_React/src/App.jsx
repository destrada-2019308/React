import { Toaster } from 'react-hot-toast'
import {useRoutes } from 'react-router-dom'
import { routes } from "./routes.jsx"

//Raiz de la aplicacion 
//Debe tener las rutas generales

function App() {
  let element = useRoutes(routes)

  return (
    <>
      {element}
      <Toaster position="bottom-right" reverseOrder={false}/>
    </>
  )
}

export default App
