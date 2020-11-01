import React from 'react'
import './Home.scss'
import { Message, DialogItem } from 'components'

const Home = ({ avatar, user }) => {
  return (
    <section className="home">
        <DialogItem 
        user= {{
          fullname: 'Roman Roman',
          avatar: null,
          isOnline: true
        }}/>
        <DialogItem 
        user= {{
          fullname: 'Roman Roman',
          avatar: null,
          isOnline: true
        }}/>
        <DialogItem 
        user= {{
          fullname: 'Roman Roman',
          avatar: null,
          isOnline: true
        }}/>
      
      {/* <Dialogs
        items={[
          {
            users: {
              fullname: 'Roman Roman',
              avatar: null,
            },
            message: {
              text: 'Message is defined but never used',
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
