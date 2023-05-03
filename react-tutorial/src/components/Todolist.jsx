import React, { useState } from 'react'
import Todo from './Todo'

export default function Todolist(sizeOfList = 0) {
  const [data, setData] = useState();
  return (
    <>
      <Todo />
    </>
  )
}
