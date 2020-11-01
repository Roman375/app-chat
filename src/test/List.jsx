import { title } from 'process'
import React from 'react'
import '../components/Message/Message.scss'
import classNames from 'classnames'

export const TodoList = ({ todos, isMe, avatar, onToggle }) => {
  if (todos.length === 0) {
    return <h4 className="center">Завдань немає</h4>
  }

   return (
    <ul>
      {todos.map((todo) => {
        // const classes = ['todo']
        // if (todo.completed) {
        //   classes.push('completed')
        // }
        return (
          <li key={todo.id}>
            {/* <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => alert('a')}
              >
                delete
              </i>
            </label> */}

            <div
              className={classNames('message', {
                'message--isme': isMe,
              })}
            >
              <div className="message__content">
                <div className="message__avatar">
                  <img src={avatar} />
                </div>
                <div className="message__info">
                  <div className="message__bubble">
                    {todo.title && <span className="message__text">{todo.title}</span>}
                  </div>
                  
                    <span className="message__date">
                      '20:00'
                    </span>
                  
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
