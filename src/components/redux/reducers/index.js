import { combineReducers } from 'redux'

import products from './product'
import categorys from './category'
import carts from './cart'
import users from './user'

export default combineReducers({
    products,
    categorys,
    carts,
    users
})