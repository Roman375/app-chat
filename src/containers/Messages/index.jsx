// import React, { useEffect, useState } from 'react'
// import { ChatInput, Message } from 'components'

// const Messages = () => {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem('todos') || '[]')
//     setTodos(saved)
//   }, [])

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos))
//   }, [todos])

//   const addHandler = (title) => {
//     const newTodo = {
//       title: title,
//       id: Date.now(),
//       completed: false,
//     }
//     setTodos((prev) => [...prev, newTodo])
//   }

//   const toggleHandler = (id) => {
//     setTodos((prev) =>
//       prev.map((todo) => {
//         // if (todo.id === id) {
//         //   todo.completed = !todo.completed
//         // }
//         return todo
//       })
//     )
//   }

//   return (
//     <>
//       <Message
//         avatar="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg"
//         isMe={true}
//         todos={todos}
//         onToggle={toggleHandler}
//       />
//        <ChatInput onAdd={addHandler} />
//     </>
//   )
// }

// export default Messages