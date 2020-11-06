import React from 'react'
import Message2 from '../Message/index2'
import { Empty } from 'antd'

const Messages = ({ items, messages, onAdd , Add}) => {
  debugger
  return  (
    <div>
        <Message2
              text='Hello'
              isMe={false}
              avatar="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg"
              date='Fri Nov 06 2020 13:11:58'
            />
            <Message2
              text='Hi'
              isMe={true}
              avatar="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg"
              date='Fri Nov 06 2020 13:11:58'
            />
            <Message2
              text='How are you?'
              isMe={false}
              avatar="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg"
              date='Fri Nov 06 2020 13:11:58'
            />
    </div>
  
  ) 
}

export default Messages
