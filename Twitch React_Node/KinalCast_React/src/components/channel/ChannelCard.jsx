const imageUrl = 'https://media.istockphoto.com/id/1337144146/es/vector/vector-de-icono-de-perfil-de-avatar-predeterminado.jpg?s=612x612&w=0&k=20&c=YiNB64vwYQnKqp-bWd5mB_9QARD3tSpIosg-3kuQ_CI='

export const ChannelAvatar = ({url}) =>{
  return(
    <div className="channels-avatar-container">
      <img src={url || imageUrl} alt="Channel Avatar" width='100%' height='100%' />
    </div>
  )
}

export const ChannelCard = ({
  tittle, 
  id,
  username,
  isOnline,
  avatarUrl,
  navigateToChannelHandler
}) => {
  return (
    <div className="channel-card">
      <span>{tittle}</span>
      <span>{username}</span>
      <span>{isOnline ? 'Online' : 'Offline'}</span>
    </div>
  )
}
