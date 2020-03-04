const initialState = {
    carts: []
}

const cart = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_CART':
            return{
                ...state,
                carts: [...state.carts, action.payload]
            }
        default:
            return state;
    }    
}

export default cart