import React from 'react'
import './Home.scss'
import $ from 'jquery'
import { Message, ChatInput } from 'components'
import { Dialogs, Messages } from 'containers'
import Messages2 from '../../components/Messages/index2'

import dialogsJson from 'dialogs.json'

const Home = ({ messages, onToggle, onAdd, Add, answers }) => {

  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header chat__sidebar-header--online">
            <div className="chat__sidebar-header-avatar">
              <img src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg" />
            </div>
          </div>

          <div className="chat__sidebar-dialogs">
            <Dialogs 
            items={dialogsJson} 
            />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header chat__dialog-header--online">
            <div className="chat__dialog-header-avatar">
              <img src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg" />
            </div>
            <b className="chat__dialog-header-fullname">Roman</b>
          </div>
          <div className="chat__dialog-message" id='wrapp'>

            {/* <Messages 
            avatar="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg"/> */}
            
            <Messages2
              
            />
            <Message
              messages={messages}
              answers={answers}
              onToggle={onToggle}
              avatar="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg"
            />
            
          </div>
          <div className="chat__dialog-input">
            <ChatInput onAdd={onAdd}
            Add={Add} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
