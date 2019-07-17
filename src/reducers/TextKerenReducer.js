import { ubahTextKeren } from '../actions/types';

const Initial_state = 'Keren cuy'

export default (state = Initial_state, action) => {
    switch(action.type) {
        case ubahTextKeren : 
            return action.payload
        default :
            return state
    }
    // if(action.type === ubahTextKeren) {
    //     return action.payload
    // }
    // else {
    //     return state
    // }
}