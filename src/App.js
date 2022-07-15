
import './App.css';
import User from './Components/User';
import Demo from './Components/Demo';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App(props) {
  const [users, setUsers] = useState([])
 useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => setUsers(res.data))
 },[]) 
 console.log('uuu', users)
  return (
    <>
    <h1>helloo</h1>
    <table border='5'>
      <tr>
        <td> Id</td>
        <td>Name</td>
        <td>Email</td>
        <td>Username</td>
      </tr>
      {
        users.map((item)=> <User item={item}/>)
      }
        
    </table>
    
    {/* <User/> */}
    {/* <Demo/> */}
    </>
  );
}

export default App;
