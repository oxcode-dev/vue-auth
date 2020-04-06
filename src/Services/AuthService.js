import {post, submit, get} from './index';
import { APP_URL } from '../Helpers/index'

export const Authlogin = async (data)=> {
    let url = APP_URL + '/login'
    return await post(url, data)
}

export const Authlogout = async() => {
    let url = APP_URL + '/logout'
    return await submit(url);
}

export const Authregister = async(data) => {
    let url = APP_URL + '/register'
    return await post(url, data)
}

export const changePassword = async(data) =>{
    let url = APP_URL + '/change-password';
    return await submit(url, data);
}

export const editProfile = async(data) => {
    let url = APP_URL + '/edit-profile';
    return await submit(url, data);
}

export const changeAvatar = async(data) => {
    let url = APP_URL + '/change-avatar';
    return await submit(url, data);
}

export const getEvents = async() => {
    let url = APP_URL + '/speakers/events';
    return await get(url);
}