import React from 'react'
import { Empty } from 'antd'

import { Message } from 'components'
 

const Messages = ({items}) => {
    return items ? (
        <div>
            <Message
              avatar="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg"
              text="Search for the keywords to learn more about each warning.Search for the keywords to learn more about each warning."
              date="Mon Oct 26 2020 19:27:41"
              isMe={false}
            />
            <Message
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC-uZ1jb4eKQQ9zVkOf3qiZt_ocUMtxEGTgA&usqp=CAU"
              text="Search for the keywords to learn more about each warning."
              date="Mon Oct 26 2020 19:27:41"
              isMe={true}
            />
            <Message
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
            />
        </div>

    ) : <Empty />
}

export default Messages