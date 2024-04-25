import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:2656/twitch/v1',
    timeout: 1000
});

export const registerRequest = async(user) =>{
    try {
        return await apiClient.post('/auth/register', user)      
    } catch (err) {
        return { error: true, err};
    };
};

export const loginRequest = async(user)=>{
    try {
        return await apiClient.post('/auth/login', user)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const getChannelsRequest = async() => {
    try {
        return await apiClient.get('/channels')
    } catch (err) {
        return{
            error: true,
            err
        }
    }
}

export const getFollowedChannelsIsRequest = async() => {
    try {
        return await apiClient.get('/channels/followed');
    } catch (err) {
        return{
            error: true,
            err
        }
    }
}