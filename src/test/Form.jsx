import React, { useRef, useState } from 'react'
import { Input } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import '../components/ChatInput/ChatInput.scss'

export const TodoForm = (props) => {
  const ref = useRef(null)

  // const [title, setTitle] = useState<string>('')

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value)

  // }

  const keyPressHandler = (event) => {
    // if (event.key === 'Enter') {
      props.onAdd(ref.current.value)
      ref.current.value = ''
      // setTitle('')
    // }
  }

  return (
    <div className="input-field mt2">
      <div className="chat-input">
        <input 
        ref={ref}
        id="title"
        type="text"
        size="large" placeholder="Type your message" 
        // onKeyPress={keyPressHandler}
        />
        <div className="chat-input__actions">
          <button>
            <SendOutlined onClick={keyPressHandler} />
          </button>
        </div>
      </div>

      {/* <input
        ref={ref}
        // onChange={changeHandler}
        // value={title}
        type="text"
        id="title"
        placeholder="Введіть нове завдання"
        onKeyPress={keyPressHandler}
      ></input>
      <label htmlFor="title" className="active">
        Введіть нове завдання
      </label> */}
    </div>
  )
}
