import React from 'react'
import PropTypes from 'prop-types'
import './Message.scss'
import formatDistance from 'date-fns/formatDistance'
import classNames from 'classnames'
import { Time } from 'components'

const Message = ({ todos, onToggle, avatar, user, text, date, isMe, hello }) => {
  return (
    <ul>
      {todos.map((todo) => {
        if (todo.isMe === true) {
          return (
            <div
              key={todo.id}
              className={classNames('message', {
                'message--isme': todo.isMe,
              })}
            >
              <div className="message__content">
                <div className="message__avatar">
                  <img src={avatar} />
                </div>
                <div className="message__info">
                  <div className="message__bubble">
                    <span className="message__text">{todo.title}</span>
                  </div>
                  {date && (
                    <span className="message__date">
                      <Time date={date} />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ) 
        }
      })}
    </ul>
  )
}
{/* <div key={todo.id} className="messagemessage--isme">
  <div className="message__content">
    <div className="message__avatar">
      <img src={avatar} />
    </div>
    <div className="message__info">
      <div className="message__bubble">
        <span className="message__text">{todo.title}</span>
      </div>
      {date && (
        <span className="message__date">
          <Time date={date} />
        </span>
      )}
    </div>
  </div>
</div> */}

Message.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
}

export default Message
