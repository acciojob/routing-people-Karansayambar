import React from 'react'
import {  useParams } from 'react-router-dom'

const Users = () => {
    const {id} = useParams();
     const users = [
    {
      id : 1,  
      name: "Leanne Graham",
      email: "Leanne Graham@example.com",
      phone: "123-456-7890",
      username: "Leanne Graham",
      website: "www.Leanne Graham.com"
    },
    {
      id : 2,  
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "987-654-3210",
      username: "janesmith",
      website: "www.janesmith.com"
    },
    {
      id : 3,  
      name: "Alice Johnson",
      email: "alicej@example.com",
      phone: "555-123-4567",
      username: "alicej",
      website: "www.alicejohnson.com"
    },
    {
      id : 4,  
      name: "Bob Brown",
      email: "bobbrown@example.com",
      phone: "555-987-6543",
      username: "bobbrown",
      website: "www.bobbrown.com"
    },
    {
      id : 5,  
      name: "Charlie Davis",
      email: "charliedavis@example.com",
      phone: "555-222-3333",
      username: "charlied",
      website: "www.charliedavis.com"
    }
  ];
  const user = users.find(user => user.id === parseInt(id));
  return (
    <div>
        {
            user ? (
                <div>
                    <h1>User Details</h1>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>username:</strong> {user.username}</p>
                    <p><strong>website:</strong> {user.website}</p>
                </div>
            ) : (
        <div>Loading...</div>
      )
        }
    </div>
  )
}

export default Users