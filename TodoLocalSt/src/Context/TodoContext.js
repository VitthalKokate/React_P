import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos :[
        {
            id :1,
            todoTitle :"Todo MSG",
            completed :false
        }
    ],
    addTodo : (todoTitle) =>{},
    updateTodo :(todoTitle,id) => {},
    deleteTodo :(id) => {},
    ToggleComplete :(id) => {}
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider