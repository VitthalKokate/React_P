import React, { useState } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import{ addTodo,removeTodo } from '../Features/todo/todoSlice'



function Todos() {

  const dispatch =  useDispatch();

const todos = useSelector((state) => state.todos)

  return (
    <>
    <div className="text-xl font-semibold mb-4">Todos</div>
    <ul className="list-none p-0">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200">
          <span className="text-lg">{todo.text}</span>
          <button 
            onClick={() => dispatch(removeTodo(todo.id))}
            className="w-6 h-6 bg-transparent hover:bg-red-500 rounded-full flex justify-center items-center"
          >
            <img 
              src="data:image/png;base64,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" 
              alt="Delete" 
              className="w-4 h-4 text-white" 
            />
          </button>
        </li>
      ))}
    </ul>
 </>
 
  )
}

export default Todos