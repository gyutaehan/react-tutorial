import React from 'react'

export default function InputTodo(props) {
  return (
    <>
    <input type='text'></input>
    <button
     onClick={props.onclickAddTodo}
    >add todo</button>
    </>
  )
}
