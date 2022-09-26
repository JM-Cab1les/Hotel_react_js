import React from 'react'
import HeadTitle from '../../common/HeadTitle/HeadTitle'

const Register = () => {
  return (
        <>
            <HeadTitle/>
            <section className='forms top'>
              <div className='container'>
                <div className='sign-box'>
                  <p>Don't have an account? Create your account, it takes less than a minute.</p>
                  <form action=''>
                    <input type='text' name='name' placeholder='Name' required/>
                    <input type='text' placeholder='email'/>
                    <input type='password' placeholder='Password'/>
                    <input type='password' placeholder='Confirm Password'/>

                    <button type='submit' className='primary-btn'>
                      Create an Account
                    </button>
                  </form>
                </div>
              </div>
            </section>
        </>
  )
}

export default Register