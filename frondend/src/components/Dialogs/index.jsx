import React from 'react'
import orderBy from 'lodash/orderBy'
import './Dialogs.scss'
import { DialogItem, Search } from '../'
import { Input, Empty } from 'antd'

const Dialogs = ({ items, userId, onSearch, inputValue, setCurrentDialog }) => {
  return (
    <div className="dialogs">
      {/* <Search onSearch={onSearch} inputValue={inputValue}/> */}
      {/* <h1 className="dialogs-title">Chats</h1> */}
      <div className='dialogs-item'>
      {items.length ? (
        orderBy(items, ['created_at'], ['desc']).map((item) => (
          <DialogItem
            key={item._id}
            {...item}
            isMe={item.user._id === userId}
          />
        ))
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
      </div>
    </div>
  )
}

export default Dialogs
