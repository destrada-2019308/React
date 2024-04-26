import { useState } from "react";
import toast from "react-hot-toast";
import { getFollowedChannelsIsRequest, getChannelsRequest as getChannelsRequestApi } from "../../services/api.js";
import React from "react";

export const useChannels = () => {
    const [channels, setChannels] = useState(null)

    const getChannels = async(isLogged = fasle ) =>{
        //Consultar al api.jsx
        const channelsData = await getChannelsRequestApi()
        //Responder si hay error
        if(channelsData.error){
            return toast.error(channelsData.err?.response?.data || 'Error al obtener los canales' )
        }
        //si no esta loggeado, jalo todos los canales
        if(!isLogged) {
            return setChannels({channels: channelsData.data.channels})
        }
        //si esta loggeado, jalo tambien a los que sigue
        const followedChannelsData = await getFollowedChannelsRequest()
        if(followedChannelsData.error){
            return toast.error( followedChannelsData.err?.response?.data  || 'Error al obtener los canales que sigues')
        }
        setChannels(
            {
                channels: channelsData.data.channels,
                followedChannels: channelsData.data.channels.filter(
                    channel => followedChannelsData.data.followedChannels.indludes(channel.id)
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
