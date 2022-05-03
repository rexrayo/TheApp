import { combineReducers } from '@reduxjs/toolkit'
import accountReducer from '../accountReducer/AccountReducer'

const rootReducer = combineReducers({
    account: accountReducer,
})

export default rootReducer