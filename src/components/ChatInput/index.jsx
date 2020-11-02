import React, {useRef} from 'react'
import { Input } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import './ChatInput.scss'

const ChatInput = (props) => {
  debugger
  const ref = useRef(null)

  const keyPressHandler = (event) => {
    // if (event.key === 'Enter') {
      // setTimeout(() => {
        props.onAdd(ref.current.value)
        ref.current.value = ''
      // }, 3000);
     
      // setTitle('')
    // }
  }

  const keyPress = (event) => {
    // if (event.key === 'Enter') {
      // setTimeout(() => {
        props.Add(ref.current.value)
        ref.current.value = ''
      // }, 3000);
     
      // setTitle('')
    // }
  }

  return (
    <>
      <div className="chat-input">
        <input 
        ref={ref}
        id="title"
        type="text"
        size="large" placeholder="Type your message" />
        <div className="chat-input__actions">
          <button>
        <SendOutlined onClick={()=>{
          keyPressHandler()
          keyPress()}} />
        </button>
        </div>
      </div>
    </>
  )
}
export default ChatInput