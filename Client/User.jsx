import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  const [users, setUsers] = useState([
    {
      Name: "Nikhil", Email:"nk@gmail.com", Age: 25
    }
  ])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-centre '>
      <div className='w-50 bg-white rounded p-3'>
        <Link to='/create' className='btn btn-success'>Add+</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => {
                return <tr>
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.Age}</td>
                  <td>
                    <Link to='/update' className='btn btn-success'>Edit</Link> 
                    <button>Delete</button>
                  </td>
                </tr>
              }) 
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default User