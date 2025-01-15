import { configureStore} from '@reduxjs/toolkit'
import {operationSlice} from './Slices/OperaSlice'

export const store = configureStore({
    reducer: operationSlice.reducer
})