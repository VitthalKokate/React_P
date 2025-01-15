import{configureStore} from '@reduxjs/toolkit'
import countReducer  from '../assets/Slice/CountSlice'

export const store = configureStore({
    reducer : {
        counter :countReducer
    },
})