import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ans: 0,  // Make sure 'ans' is defined in your initial state
  };
export const operationSlice = createSlice({
    name : 'operation',
    initialState ,
    reducers:{
        add :(state , action) =>{
            const { x, y } = action.payload; 
            state.ans = Number(x) + Number(y)
        },
        sub :(state , action) =>{
            const { x, y } = action.payload; 
            state.ans = Number(x) - Number(y)
        },
        mul :(state , action) =>{
            const { x, y } = action.payload; 
            state.ans = Number(x) * Number(y)
        },
        div :(state , action) =>{
            const { x, y } = action.payload;
            if(!Number(y)){
                return "Second Valu not should br ZEROR"
            } 
            state.ans = Number(x) / Number(y)
           
        },
        mod :(state , action) =>{
            const { x, y } = action.payload; 
            if(!Number(y)){
                return "Second Valu not should br ZEROR"
            } 
            state.ans = Number(x) / Number(y)
        },
    }
})
export const {add,sub,mul,mod,div} = operationSlice.actions;
export default operationSlice.reducer