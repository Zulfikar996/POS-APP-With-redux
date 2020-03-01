const initialState = {
    products: []
}

const product = (state = initialState, action) => {
   switch(action.type){
       case 'GET_PRODUCT_PENDING':
           return{
               ...state
           }
        case 'GET_PRODUCT_REJECTED':
            return{
                ...state
            }
        case 'GET_PRODUCT_FULFILLED':
            return{
                ...state,
                products: action.payload.data.result
            }
        
        case 'POST_PRODUCT_PENDING':
            return{
                ...state
            }
         case 'POST_PRODUCT_REJECTED':
             return{
                 ...state
             }
         case 'POST_PRODUCT_FULFILLED':
            const newDataProduct = [...state.products, action.payload.data.result];
             return{
                 ...state,
                 products: newDataProduct
             }
        
        default:
            return state;
        }

}

export default product