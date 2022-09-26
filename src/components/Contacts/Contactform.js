import React, { useState } from 'react'

const Contactform = () => {
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [phone, setphone] = useState('')
    const [Email, setEmail] = useState('')
    const [subject, setsubject] = useState('')
    const [company, setcompany] = useState('')
    const [message, setmessage] = useState('')

    const [allValue, setValue] = useState([])

    const formSubmit = (e) => {
        e.preventDefault()
        const newValue = {fname, lname, phone, Email, subject, company, message};
        setValue([...allValue, newValue])

        setfname("")
        setlname("")
        setphone("")
        setEmail("")
        setsubject("")
        setcompany("")
        setmessage("")


      
    }
  return (
        <>
            <section className='contact mtop'>
                <div className='container flex'>
                    <div className='main-content'>
                        <h2>Contact form</h2>
                        <p>Fill out form below, we will get back you soon.</p>

                        <form onSubmit={formSubmit}>
                            <div className='grid1'>
                                <div className='input'>
                                    <span>
                                        First Name <label>*</label>
                                    </span>
                                    <input type="text" name='fname' value={fname} onChange={(e) => setfname(e.target.value)}/>
                                </div>

                                <div className='input'>
                                    <span>
                                        Last Name <label>*</label>
                                    </span>
                                    <input type="text" name='lname' value={lname} onChange={(e) => setlname(e.target.value)}/>
                                </div>

                                <div className='input'>
                                    <span>
                                        Phone Number <label>*</label>
                                    </span>
                                    <input type="text" name='phone' value={phone} onChange={(e) => setphone(e.target.value)}/>
                                </div>

                                <div className='input'>
                                    <span>
                                        Email <label>*</label>
                                    </span>
                                    <input type="email" name='email' value={Email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>

                                <div className='input'>
                                    <span>
                                        Subject<label>*</label>
                                    </span>
                                    <input type="text" name='subject' value={subject} onChange={(e) => setsubject(e.target.value)}/>
                                </div>

                                <div className='input'>
                                    <span>
                                        Company <label>*</label>
                                    </span>
                                    <input type="text" name='lname' value={company} onChange={(e) => setcompany(e.target.value)}/>
                                </div>

                                
                            </div>
                            <div className='input inputlast'>
                                    <span>
                                        Write Your Message <label>*</label>
                                    </span>
                                  <textarea name='message' id='' value={message} cols='30' row='10' onChange={(e) => setmessage(e.target.value)}/>
                                </div>

                            <button className='primary-btn'>Submit</button>
                        </form>
                    </div>
                    <div className='side-content'>
                        <h3>Visit Our Location</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur</p>
                        <br/>
                        
                        <h3>Message Us</h3>
                        <span>info@example.com</span>
                        <br/>
                        <span>+01 123 456 789</span>
                        <br/>

                        <div className='icon'>
                            <h3>Follow Us</h3>
                        

                            <div className='flex_space'>
                                <i className='fab fa-facebook-f'></i>
                                <i className='fab fa-twitter'></i>
                                <i className='fab fa-linkedin'></i>
                                <i className='fab fa-instagram'></i>
                                <i className='fab fa-pinterest'></i>
                                <i className='fab fa-youtube'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='show-data'>
                {allValue.map((currentValue)=>{
                    const {fname, lname, phone, Email, subject, company, message} = currentValue
                    return (
                        
                <div className='sing-box'>
                    <h1>Send SuccessFully</h1>
                    <h3>
                        First Name: <p>{fname}</p>
                    </h3>
                    <h3>
                        Last Name: <p>{lname}</p>
                    </h3>
                    <h3>
                        Phone Number: <p>{phone}</p>
                    </h3>
                    <h3>
                        Email: <p>{Email}</p>
                    </h3>
                    <h3>
                        Subject: <p>{subject}</p>
                    </h3>
                    <h3>
                        Company: <p>{company}</p>
                    </h3>
                </div>
                )
            })}
            </section>
        </>
  )
}

export default Contactform;