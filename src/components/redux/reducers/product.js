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
        

             case 'UPDATE_PRODUCT_PENDING':
                return{
                    ...state
                }
             case 'UPDATE_PRODUCT_REJECTED':
                 return{
                     ...state
                 }
             case 'UPDATE_PRODUCT_FULFILLED':
                 console.log(action.payload)
                const newEditProduct = state.products.map(product => {
                    if(product.id === action.payload.data.result.id){
                        return action.payload.data.result;
                    }
                     return product;
                })
                 return{
                     ...state,
                     products: newEditProduct
                 }

                 case 'DELETE_PRODUCT_PENDING':
                    return{
                        ...state
                    }
                 case 'DELETE_PRODUCT_REJECTED':
                     return{
                         ...state
                     }
                 case 'DELETE_PRODUCT_FULFILLED':
                     console.log(action.payload)
                    const newDeleteProduct = state.products.filter(product => product.id !== action.payload.data.result.id)
                    console.log(newDeleteProduct)
                     return{
                         ...state,
                         products: newDeleteProduct
                     }
        default:
            return state;
        }

}

export default product