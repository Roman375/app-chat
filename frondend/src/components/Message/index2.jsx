import React from 'react'
import PropTypes from 'prop-types'
import './Message.scss'
import formatDistance from 'date-fns/formatDistance'
import classNames from 'classnames'
import { Time } from 'components'
import { Empty } from 'antd'

const Message = ({ messages, onToggle, avatar, user, text, date, isMe, answers }) => {
  debugger
  console.log(messages)
  return (
    
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
                    <span className="message__text">{text}</span>
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

Message.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
}

export default Message



{/* <ul>
      {messages.map((message) => {
          return(
            <div
              key={message.id}
              className={classNames('message', {
                'message--isme': message.isMe,
              })}
            >
              <div className="message__content">
                <div className="message__avatar">
                  <img src={avatar} />
                </div>
                <div className="message__info">
                  <div className="message__bubble">
                    <span className="message__text">{message.title}</span>
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
      })}
    </ul> */}