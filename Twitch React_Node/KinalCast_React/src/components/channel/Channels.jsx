import { ChannelCard } from "./ChannelCard.jsx"

export const Channels = ({channels}) => {
  return (
    <div className="channels-container">
      {
        channels.map((channel) =>{
          <ChannelCard
            key={channel.id}
            id={channel.id}
            tittle={channel.tittle}
            username={channel.username}
            isOnline={channel.isOnline}
            avatarUrl={channel.avatarUrl}
          />
        })
      }
    </div>
  )
}
