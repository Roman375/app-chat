import React from 'react'
import Message from '../Message/index2'
import { Empty } from 'antd'

const Messages = ({ items, messages, onAdd , Add}) => {
  debugger
  return  (
    <div>
      {items.map((item) => (
        <Message
              {...item}
               />
      ))} 
    </div>
  
  ) 
}

export default Messages
