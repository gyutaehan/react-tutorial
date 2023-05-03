import React from 'react'

export default function Todo(props) {
  return (
    <>
    <input 
        type='text'
        value={props.todoContents}
    >
    </input>
    </>
  )
}
