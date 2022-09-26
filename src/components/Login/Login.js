import React, {useState} from 'react'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import './design.css'

const Login = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const [signValue, setsignValue] = useState([])

    const formSubmit = (e) => {
        e.preventDefault()
        const newValue = {email: email, password: password};
        setsignValue([...signValue, newValue])

        setemail("")
        setpassword("")
    }
  return (
        <>
            <HeadTitle/>
            <section className='forms top'>
                <div className='container'>
                    <div className='sign-box'>
                        <p className='sign-box-head'>Enter your email and password below to login to your account</p>
                        <form onSubmit={formSubmit}>
                            <input type='text' name='email' placeholder='Email' value={email} onChange = {(e) => setemail(e.target.value)}/>
                            <input type='password' name='password' placeholder='password' value={password} onChange = {(e) => setpassword(e.target.value)}/>
                            
                            <div className='flex_space'>
                                <div className='flex'>
                                    <input type='checkbox'/>
                                    <label>Remember Me</label>
                                </div>
                                <div className='flex'>
                                    <span>I forgot my password</span>
                                </div>
                            </div>

                                <button type='submit' className='primary-btn'>Sign In</button>
                                <p>Dont Have Account?</p>
                            
                        </form>
                    </div>
                </div>
            </section>

            <section className='show-data'>
            {signValue.map((currentValue) =>{
                return(

                <div className='sing-box'>
                    <h1>Sign In Successfully</h1>
                    <h3>
                        Email:<p>{currentValue.email}</p>
                    </h3>
                    <h3>
                        Password:<p>{currentValue.password}</p>
                    </h3>
                </div>
                )
            })}
            </section>
            
        </>
  )
}

export default Login