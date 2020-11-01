import React, { useState } from 'react'
import { Dialogs as BaseDialogs, Search } from 'components'

const Dialogs = ({ items, userId }) => {
  const [inputValue, setValue] = useState('')
  const [filtred, setFiltredItems] = useState(Array.from(items))

  const onChangeInput = (value) => {
    setFiltredItems(items.filter(
      dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
    ));


    setValue(value)
  }

  return (
    <>
      <Search onSearch={onChangeInput}
        inputValue={inputValue} />
      <h1>Chats</h1>
      <BaseDialogs
        userId={userId}
        items={filtred}
        onSearch={onChangeInput}
        inputValue={inputValue}
      />
    </>
  )
}

export default Dialogs
