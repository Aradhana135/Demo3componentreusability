import React from 'react'
// import Card from './Card'
const User = (props) => {
  const {id,name,email,user_Name}=props.item
  return (
    <>
        <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{user_Name}</td>
        </tr>
    </>
  )
}

export default User