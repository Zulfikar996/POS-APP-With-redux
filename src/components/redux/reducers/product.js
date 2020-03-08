const initialState = {
    products: [],
    totalPage: 0,

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
                products: action.payload.data.result,
                totalPage: Math.ceil(action.payload.data.result/6)
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
    
             case 'PATCH_PRODUCT_PENDING':
                return{
                    ...state
                }
             case 'PATCH_PRODUCT_REJECTED':
                 return{
                     ...state
                 }
             case 'PATCH_PRODUCT_FULFILLED':
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
                    const newDeleteProduct = state.products.filter(product => product.id !== action.payload.data.result.id)
                    console.log(newDeleteProduct)
                     return{
                         ...state,
                         products: newDeleteProduct
                     }

                     case 'FILTER_PRODUCT_PENDING':
                         console.log(action.payload)
                        return {
                            ...state
                        }
                    case 'FILTER_PRODUCT_REJECTED':
                        return {
                            ...state
                        }
                    case 'FILTER_PRODUCT_FULFILLED':
                        return {
                            ...state,
                            products: action.payload.data.result
                        }
                    // case 'PAGINATION_FULFILLED':
                    //     return {
                    //         ...state,
                    //         products: newPaginationProduct
                    //     }
        default:
            return state;
        }

}

export default product