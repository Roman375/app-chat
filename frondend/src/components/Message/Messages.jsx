import React from 'react'
import Message from './index'

const Messages = ({messages, answers, avatar}) => {
  return (
      <>
    <Message
    messages={messages}
    answers={answers}
      avatar={avatar}
    />
   </> 
  )
}

export default Messages
