const inialState = {
    value : 0
}

const counter = (state = inialState, action) => {
    switch(action.type){
        case 'INCREASE' : {
            return{
                ...state,
                value: state.value + 1
            }
        }
        
        case 'DECREASE' : {
            return{
                ...state,
                value: state.value - 1
            }
        }
        
        case 'RESET' : {
            return{
                ...state,
                value: 0
            }
        }

        default: {
            return state
        }
    }
}

export default counter