import React, { useEffect, useState } from 'react'
import { ChatInput, Message } from 'components'
import { Home } from './pages'

const HomeCont = () => {
  const [todos, setTodos] = useState([])
  const [hello, setHello] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]')
    setTodos(saved)
  }, [])

  useEffect(() => {
    const save = JSON.parse(localStorage.getItem('hello') || '[]')
    setHello(save)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(hello))
  }, [hello])

  const addHandler = (title) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      isMe: true,
    }
    setTodos((prev) => [...prev, newTodo])
  }
  const Add = (title) => {
    const newhello = {
      title: title,
      id: Date.now(),
      isMe: false,
    }
    setHello((prev) => [...prev, newhello])
  }

  const toggleHandler = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        // if (todo.id === id) {
        //   todo.completed = !todo.completed
        // }
        return todo
      })
    )
  }

  return (
    <>
    <Home 
    hello={hello}
    todos={todos}
        onToggle={toggleHandler}
        onAdd={addHandler}
        Add={Add}/>
        
    </>
  )
}

export default HomeCont