import { USER_TOKEN } from '../../Helpers/index';
import { setInStorage, getInStorage } from '../../Helpers/localStorage'
export default{
    state: {
        user: null,
        token: null
    },
    mutations: {
        LOAD_USER(state, payload){
            state.user = payload.user;
            state.token = payload.access_token;
        },

        LOAD_TOKEN(state, payload){
            state.token = payload;
        }
    },
    actions: {
        async queryToken({commit}) {
            let token = await getInStorage(USER_TOKEN);

            if(token){
                commit('LOAD_TOKEN', token);
            }
        },

        async updateUser({commit}, payload){
            let user = await setInStorage(USER_TOKEN, payload.access_token);
            commit('LOAD_USER', payload);
        }
    },
    getters: {
        user: state => state.user,
        isLogin: state => !!state.token,
    }
}