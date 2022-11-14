import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
// import {useNavigate} from 'react-router-dom'

function Contact() {
    
    const navigate = useNavigate()

    const nameRef = useRef('')
    const emailRef = useRef('')
    const messageRef = useRef('')

    function submithandler(event) {
        event.preventDefault()

        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }
        alert(`thank you ${data.name}, your message has been sent and we will reply as soon as possible at your given email$ {data.email}`)

        navigate('/')
        // add a prop to pass the value to the parents
        // useNavigate() should be used here to go back to main page after collecting the info and
        // sending the message with alert/feedback for sending
        
    }


    return ( 
        <div className='contact-container'>
            <p className='contact__p'>fill up the form</p>
            <form onSubmit={submithandler}>
                <label htmlFor="name">
                    <input
                    ref={nameRef} 
                    name="name"
                    tabIndex='1'
                    type="text" 
                    placeholder="your name" 
                    required 
                    id='name'/>
                </label>
                <label htmlFor="email">
                    <input 
                    ref={emailRef} 
                    name="email"
                    tabIndex='2'
                    type="email" 
                    placeholder="youremail@example.com" 
                    required id='email'/>
                </label>
                <label htmlFor="message">
                    <textarea
                    ref={messageRef} 
                    name="message"
                    tabIndex='3'
                    type="comment" 
                    placeholder="your message..." 
                    required id='message' rows='5'>
                    </textarea>
                </label>
                <button
                // onClick={handleSubmit}
                type="submit"
                tabIndex='4'
                >
                Send
                </button>

            </form>
        </div>
     );
}

export default Contact;