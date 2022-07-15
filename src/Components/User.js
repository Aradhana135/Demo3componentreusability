import React from 'react'
// import Card from './Card'
const User = (props) => {
  return (
    <>
        <tr key={props.item.id}>
            <td>{props.item.id}</td>
            <td>{props.item.name}</td>
            <td>{props.item.email}</td>
            <td>{props.item.username}</td>
        </tr>
    </>
  )
}

export default User