import React from 'react'
import { Outlet } from 'react-router-dom';

const Users = ()=> {
  return (
    <>
    <div className="container d-flex justify-content-center">
      <Outlet />
      </div>

    </>
  )
}

export default Users;
