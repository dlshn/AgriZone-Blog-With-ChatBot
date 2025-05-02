import React from 'react'
import "../styles/Register.css"; 

export const Register = () => {
  return (
    <>
    <form action="" className='register-form'>
        <h1>Register</h1>
        <input type="text" name="Name" />
        <input type="email" name='Email' />
        <input type="password" name='Password' />
        <button type='submit'>Register</button>
    </form>
    </>
  )
}
