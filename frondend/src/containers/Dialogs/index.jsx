import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Dialogs as BaseDialogs, Search } from 'components'
import { dialogsActions } from 'redux/actions'
import './Dialogs.scss'

const Dialogs = ({ fetchDialogs, setCurrentDialog, items, userId }) => {
  const [inputValue, setValue] = useState('')
  const [filtred, setFiltredItems] = useState(Array.from(items))

  const onChangeInput = (value) => {
    debugger
    setFiltredItems(
      items.filter(
        (dialog) =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    )
    setValue(value)
  }

  useEffect(() => {
    if (!items.length) {
      fetchDialogs()
    } else {
      setFiltredItems(items)
    }
  }, [])

  return (
    <>
      <Search onSearch={onChangeInput} inputValue={inputValue} />
      <h1 className="title">Chats</h1>
      <BaseDialogs
        userId={userId}
        items={filtred}
        onSearch={onChangeInput}
        inputValue={inputValue}
        setCurrentDialog={setCurrentDialog}
      />
    </>
  )
}

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs)
