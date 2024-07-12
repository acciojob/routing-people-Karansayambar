import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'

const Users = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
     const users = [
    {
      id : 1,  
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: "123-456-7890",
      username: "Bret",
      website: "hildgard.org"
    },
    {
      id : 2,  
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "987-654-3210",
      username: "janesmith",
      website: "www.hildgard.org"
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
  useEffect(() => {
    setTimeout(()  => {
        const foundId = users.find((user) => user.id === parseInt(id))
        setUser(foundId);
        setLoading(false);
    },1000);
  },[id])
  return (
    <div>
        {
            loading ? (
                <div>Loading...</div>
            ) : (
            user ? (
                <div>
                    <h1>User Details</h1>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Website:</strong> {user.website}</p>
                </div>
            ) : (
       <p>User not Found</p>
      )
    )
        }
    </div>
  )
}

export default Users