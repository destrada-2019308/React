import { useState } from "react";
import toast from "react-hot-toast";
import { getFollowedChannelsIsRequest, getChannelsRequest as getChannelsRequestApi, getFollowedChannelsIsRequest } from "../../services/api.js";

export const useChannels = () => {
    const [channels, setChannels] = useState([])
    const getChannels = async(isLogged = fasle ) =>{
        //Consultar al api.jsx
        const channelsData = await getChannelsRequestApi()
        //Responder si hay error
        if(channelsData.error){
            return toast.error(channelsData.err?.response?.data || 'Error al obtener los canales' )
        }
        //si no esta loggeado, jalo todos los canales
        if(!isLogged) {
            return setChannels({channels: channelsData.data.channel})
        }
        //si esta loggeado, jalo tambien a los que sigue
        const followedChannelsData = await getFollowedChannelsIsRequest()
        if(followedChannelsData.error){
            return toast.error( followedChannelsData.err?.response?.data  || 'Error al obtener los canales que sigues')
        }
        setChannels(
            {
                channels: channelsData.data.channels,
                followedChannels: channelsData.data.channels.filter(
                    channel => followedChannelsData.data.followedChannels.includes(channel.id)
                )
            }
        )
    }
  return {
    getChannels,
    isFetching: !Boolean(channels),
    allChannels: channels?.channels,
    followedChannels: channels?.followedChannels
  }
}
