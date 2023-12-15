import { createStore } from 'vuex'
import  state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

const Store = createStore({
    state,
    actions,
    mutations,
    getters,
})
export default Store;