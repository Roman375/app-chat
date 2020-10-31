import React from 'react'
import PropTypes from 'prop-types'
import './Message.scss'

const Message = ({ avatar, user, text, date }) => {
    return (
        <div className='message'>
            <div className="message__avatar">
                <img src={avatar} />
            </div>
            <div className="message__content">
                <div className="message__bubble">
                    <p className="message__text">
                        {text}
                    </p>
                </div>
                <span className="message__date">
                    {date}
                </span>
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