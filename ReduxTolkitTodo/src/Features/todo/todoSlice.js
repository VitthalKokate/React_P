import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos : [{id:1,text : "Hello"}]
}

export const todoSlice = createSlice({
    name : 'Todo', // Name of your slice
    initialState,
    reducers :{
        addTodo :(state,action) => {
            const todo = {
                id: nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state ,action) => {
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload)

        }
        // update
        //delete
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer