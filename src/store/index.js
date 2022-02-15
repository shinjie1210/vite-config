import {
    createStore,
} from 'vuex';

export default createStore({
    state: {
        test: 0
    },
    mutations: { //同步
        add(state) {
            state.test++
        },
        min(state) {
            state.test--
        },
        set99(state, payload) {
            state.test = payload
        }
    },
    actions: {
        change(context, payload) { //异步
            setTimeout(() => {
                context.commit('set99', payload)
            }, 1500);
        }
    }
});