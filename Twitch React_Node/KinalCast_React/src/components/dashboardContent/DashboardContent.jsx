import { Route, Routes } from "react-router-dom"
import { ChannelView } from '../channel/ChannelView.jsx'
import { Channels } from '../channel/Channels.jsx'

export const DashboardContent = ({ channels, getChannels }) => {
  return (
    <div className="content-container">
        <Routes>
            <Route path="channels" element={<Channels channels={channels}/>}/>
            <Route path="channel/:id" element={<ChannelView getChannels={getChannels}/>}/>
        </Routes>
    </div>
  )
}
