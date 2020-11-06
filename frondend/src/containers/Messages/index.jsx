import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Messages as BaseMessages } from 'components'
import { messagesActions } from 'redux/actions'

const Dialogs = ({ fetchMessages, currentDialog, items, avatar, messages, answers }) => {
  useEffect(() => {
    if (fetchMessages) {
      fetchMessages(currentDialog)
    }
  }, [currentDialog])

  return (
    <>
      <BaseMessages
        items={items}
        avatar={avatar}
        messages={messages}
        answers={answers}
      />
    </>
  )
}

export default connect(
  ({ dialogs, messages }) => ({
    currentDialog: dialogs.currentDialog,
    items: messages.items,
  }),
  messagesActions
)(Dialogs)
