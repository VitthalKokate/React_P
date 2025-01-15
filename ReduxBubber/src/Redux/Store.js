import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Couter/counterSlice'

export const store = configureStore({
    reducer :{
        counter: counterReducer,

    },
})