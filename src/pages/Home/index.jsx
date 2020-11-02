import React from 'react'
import './Home.scss'
import { Message, ChatInput, Search } from 'components'
import { Dialogs } from 'containers'

import dialogsJson from 'dialogs.json'

const Home = ({isMe, todos, onToggle, onAdd, Add, hello }) => {
  const onSearch = (value) => console.log(value)
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
            <Dialogs items={dialogsJson} />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header chat__dialog-header--online">
            <div className="chat__dialog-header-avatar">
              <img src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg" />
            </div>
            <b className="chat__dialog-header-fullname">Roman</b>
          </div>
          <div className="chat__dialog-message">
            <Message
              todos={todos}
              hello={hello}
              onToggle={onToggle}
              isMe={isMe}
              avatar="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg"
            />
          </div>
          <div className="chat__dialog-input">
            <ChatInput onAdd={onAdd}
            Add={Add} />
          </div>
        </div>
      </div>

      {/* <Dialogs
        items={[
          {
            _id: Math.random(),
            text: 'Message is defined but never used',
              created_at: 'Sun Nov 01 2020 14:10:34',
              user: {
                _id: 1,
                fullname: 'Roman Roman',
                avatar: "https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg",
                isOnline: true
              },
          },
          {
            _id: Math.random(),
            text: 'Message is defined but never used',
              created_at: 'Sun Nov 01 2020 14:20:40',
              user: {
                _id: 1,
                fullname: 'Nazar Roman',
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC-uZ1jb4eKQQ9zVkOf3qiZt_ocUMtxEGTgA&usqp=CAU",
              },
          },
          {
            _id: Math.random(),
            text: 'Message is defined but never used',
              created_at: 'Sun Nov 01 2020 14:20:34',
              user: {
                _id: 1,
                fullname: 'Roman ',
                avatar: "https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg",
                isOnline: true
              },
          },
        ]}
      /> */}

      {/* <Message
        avatar="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg"
        text="Search for the keywords to learn more about each warning."
        date="Mon Oct 26 2020 19:27:41"
        isMe={false}
      />
      <Message
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC-uZ1jb4eKQQ9zVkOf3qiZt_ocUMtxEGTgA&usqp=CAU"
        text="Search for the keywords to learn more about each warning."
        date="Mon Oct 26 2020 19:27:41"
        isMe={true}
      /> */}
    </section>
  )
}

export default Home
