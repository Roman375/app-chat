import React from 'react'
import './DialogItem.scss'
import Time from 'components'
import classNames from 'classnames'

const DialogItem = ({ date, user }) => {

  return (
    
    <div className="dialogs">
      <div className={classNames('dialogs__item', {'dialogs__item--online' : user.isOnline})}>
        <div className="dialogs__item-avatar">
          <img src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg"></img>
        </div>
        <div className="dialogs__item-info">
          <div className="dialogs__item-info-top">
            <b>{user.fullname}</b>
            <span>
              {/* <Time date={date} /> */}
              13:00
            </span>
          </div>
          <div className="dialogs__item-info-bottom">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              expedita!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DialogItem