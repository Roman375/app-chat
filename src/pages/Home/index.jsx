import React from 'react'
import './Home.scss'
import { Message } from 'components'

const Home = ({ avatar, user }) => {
    return (
        <section className="home">
            <Message
                avatar="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg"
                text="Search for the keywords to learn more about each warning."
                date="Mon Oct 26 2020 19:27:41"
            />
        </section>
    )
}

export default Home