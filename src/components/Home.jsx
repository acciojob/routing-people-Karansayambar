import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>User List</h1>
        <ul>
        <li>
          <Link to="/users/1">John Doe</Link>
        </li>
        <li>
          <Link to="/users/2">Jane Smith</Link>
        </li>
        <li>
          <Link to="/users/3">Alice Johnson</Link>
        </li>
        <li>
          <Link to="/users/4">Bob Brown</Link>
        </li>
        <li>
          <Link to="/users/5">Charlie Davis</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home