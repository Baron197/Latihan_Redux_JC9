const Initial_state = 'Keren cuy'

export default (state = Initial_state, action) => {
    switch(action.type) {
        case 'Ubah Value Keren' : 
            return action.payload
        default :
            return state
    }
}