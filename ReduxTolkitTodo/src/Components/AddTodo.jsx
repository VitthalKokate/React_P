import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import{ addTodo,removeTodo } from '../Features/todo/todoSlice'

function AddTodo() {
    const [input,SetInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        SetInput('')
    }
  return (
    <>
     <form  onSubmit={addTodoHandler}  className="flex space-x-3 mt-12">
            <input
                type="text"
                placeholder="Write Todo..."
                value={input}
                onChange={(e) => SetInput(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    </>
  )
}

export default AddTodo