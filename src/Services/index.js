import axios from 'axios'
import { USER_TOKEN } from '../Helpers/index'
import { getInStorage } from '../Helpers/localStorage'

export const post = async (url, data) => {
    const config = {
        method: 'post',
        data: data,
        url: url
    };
    return await axios(config)
}

export const submit = async (url, data) => {
    let token = await getInStorage(USER_TOKEN);
    const config = {
        method: 'post',
        url: url,
        data: data,
        headers: {
            Authorization: 'Bearer ' + token
        }
    };
    return await axios(config);
}

export const fileSubmit = async (url, data) => {
    let token = await getInStorage(USER_TOKEN);
    const config = {
        method: 'post',
        url: url,
        data: data,
        headers: {
            // 'Content-Type' : 'multipart/form-data',
            Authorization: 'Bearer ' + token
        }
    };
    return await axios(config);
}

export const get = async(url) => {
    let token = await getInStorage(USER_TOKEN);
    const config = {
        method: 'get',
        url: url,
        headers: {
            // 'Content-Type' : 'multipart/form-data',
            Authorization: 'Bearer ' + token
        }
    };
    return await axios(config);
}