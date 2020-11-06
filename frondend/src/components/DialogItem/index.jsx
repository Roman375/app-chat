import React from 'react'
import Time from 'components'
import classNames from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import './DialogsItem.scss'

const getMessageTime = (created_at) => {
  if (isToday(created_at)) {
    return format(new Date(created_at), 'MM:mm')
  } else {
    return format(new Date(created_at), 'PP')
  }
}

const DialogItem = ({_id, user, date, isMe, created_at, text, setCurrentDialog }) => {
  return (
    <div className="dialogs">
      <div
        className={classNames('dialogs__item', {
          'dialogs__item--online': user.isOnline,
        })}
        // onClick={setCurrentDialog.bind(this, _id)}
      >
        <div className="dialogs__item-avatar">
          <img src={user.avatar}></img>
        </div>
        <div className="dialogs__item-info">
          <div className="dialogs__item-info-top">
            <b>{user.fullname}</b>
            <span>
              {getMessageTime(created_at)}
            </span>
          </div>
          <div className="dialogs__item-info-bottom">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DialogItem
