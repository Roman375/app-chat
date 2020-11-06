import React from 'react'
import Message2 from '../Message/index2'
import { Message } from 'components'
import { Empty } from 'antd'

const Messages = ({ items, messages, answers, avatar }) => {
  debugger
  return items ? (
    <div>
      {items.map((item) => (
        <Message2 {...item} />
      ))}
      <Message messages={messages} answers={answers} avatar={avatar} />
    </div>
  ) : (
    <Empty />
  )
}

export default Messages
