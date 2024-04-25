import { useEffect } from "react"
import { DashboardContent } from "../../../components/dashboardContent/DashboardContent.jsx"
import { Navbar } from "../../../components/navbar/Navbar.jsx"
import { Sidebar } from "../../../components/sidebar/Sidebar.jsx"
import './dashboardPage.css'

export const Dashboard = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log('Se esta cargando el componente');
    }, 5000)
  },[])
  return (
    <div className="dashboard-container">
      <Navbar/>
      <Sidebar/>
      <DashboardContent/>
    </div>
  )
}
