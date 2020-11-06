import React, { useEffect, useState } from 'react'
import { ChatInput, Message } from 'components'
import { Home } from './pages'

const HomeCont = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('messages') || '[]')
    setMessages(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages))
  }, [messages])

  const addHandler = (title) => {
    const newMessage = {
      title: title,
      id: Date.now(),
      isMe: true,
      date:new Date()
    }
    setMessages((prev) => [...prev, newMessage])
  }
  const keyPress = (title) => {
    const newMessage = {
      title: title,
      id: Date.now(),
      isMe: false,
      date: new Date()
    }
    setMessages((prev) => [...prev, newMessage])
  }
  

  
  return (
    <>
      <Home
        messages={messages}
        onAdd={addHandler}
        Add={keyPress}
      />
    </>
  )
}

export default HomeCont
