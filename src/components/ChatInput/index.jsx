import React from 'react'
import { Input } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import './ChatInput.scss'

const ChatInput = () => {
  return (
    <>
      <div className="chat-input">
        <Input size="large" placeholder="Type your message" />
        <div className="chat-input__actions">
          <button>
        <SendOutlined />
        </button>
        </div>
      </div>
    </>
  )
}
export default ChatInput