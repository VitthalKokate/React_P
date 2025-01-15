import React from 'react'
import{createSlice} from '@reduxjs/toolkit'
import { useState, } from 'react'

const initialState = {
    value: 0,
  };

const countSlice = createSlice({
    name : 'counter',
    initialState ,
    reducers :{
        addVal : (state) => {
            state.value +=1
        },
        removeVal : (state) => {
            state.value -=1
        },
        reset : (state) =>{
            state.value = 0
        },
        userSet : (state,actions) =>{
            state.value = Number(actions.payload)
        }
    },
})

export const {addVal,removeVal,reset,userSet}  = countSlice.actions
export default countSlice.reducer;