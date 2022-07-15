import React, { useState } from 'react'

const Card = (props) => {
    const [state]=[{
         id:props.id,
         firstname:props.firstname,
         username:props.username,
         email:props.email,
         address:props.address
    }]
  return (
    <>
    <h1> List of users</h1>
{state.map((item)=>{<ul><li key={item.props.id}> {item.props.id}:{item.props.firstname}{item.props.username}{item.props.email}{item.props.address}</li></ul>})}
    </>
  )
}

export default Card