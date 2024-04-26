import { useEffect } from "react"
import { DashboardContent } from "../../components/dashboardContent/DashboardContent.jsx"
import { Navbar } from "../../components/navbar/Navbar.jsx"
import { Sidebar } from "../../components/sidebar/Sidebar.jsx"
import { useChannels } from '../../shared/hooks/useChannels.jsx'
import './dashboardPage.css'

export const Dashboard = () => {
  const { getChannels, allChannels} = useChannels()

  useEffect(() => {
    getChannels(false)
  },[])
  return (
    <div className="dashboard-container">
      <Navbar/>
      <Sidebar/>
      <DashboardContent channels={allChannels} getChannels={getChannels}/>
    </div>
  )
}
