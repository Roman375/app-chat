import React from 'react'
import PropTypes from 'prop-types'
import './Message.scss'
import formatDistance from 'date-fns/formatDistance'
import classNames from 'classnames'
import {Time} from 'components'

const Message = ({ avatar, user, text, date, isMe }) => {
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
            {text && <span className="message__text">{text}</span>}
          </div>
          {date && <span className="message__date">
            <Time date={date} />
          </span>}
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
