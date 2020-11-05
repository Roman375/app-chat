import React, { useRef, useState } from 'react'
import { Input, message } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import './ChatInput.scss'
import axios from 'axios'

const ChatInput = (props) => {
  const ref = useRef(null)

  const keyPressHandler = (event) => {
    props.onAdd(ref.current.value)
    ref.current.value = ''
  }

  //   let value = fetch('https://api.chucknorris.io/jokes/random')
  //   .then((r) => r.json()
  //  .then((res) => ({ data: res})))
  //   .then((res) => console.log(res.data.value))

  const keyPress = (event) => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((r) => r.json().then((res) => ({ data: res })))
      .then((res) => props.Add(res.data.value))
    // props.onAdd(ref.current.value = res.data.value)
  }

  // console.log(value)

  return (
    <>
      <div className="chat-input">
        <input
          ref={ref}
          id="title"
          type="text"
          size="large"
          placeholder="Type your message"
        />
        <div className="chat-input__actions">
          <button>
            <SendOutlined
              onClick={() => {
                keyPressHandler()
                setTimeout(() => {
                  keyPress()
                  // ref.current.value = value
                }, 2000)
              }}
            />
          </button>
        </div>
      </div>
    </>
  )
}
export default ChatInput
