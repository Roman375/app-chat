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
    }
    setMessages((prev) => [...prev, newMessage])
  }
  

  
  return (
    <>
      <Home
        messages={messages}
        onAdd={addHandler}
      />
    </>
  )
}

export default HomeCont
