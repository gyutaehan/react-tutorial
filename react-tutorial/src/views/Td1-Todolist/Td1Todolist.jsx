import React from 'react'
import Todolist from '../../components/Todolist'
import SearchBox from '../../components/SearchBox'
import InputTodo from '../../components/InputTodo'
import "./Td1Todolist.scss";

export const Td1Todolist = () => {

  function handleClickInputTodo(params) {
    console.log("handleClickInputTodo.. click..");
  }

  return (
    <>
      <div className='searchBox'>
        <SearchBox />
      </div>
      <div className='todolists'>
        <Todolist todoContents="종이팩"/>
      </div>
      <div className='inputTodo'>
        <InputTodo 
          onclickAddTodo={handleClickInputTodo}
        />
      </div>
    </>
  )
}
