import React, { useRef} from 'react'

function Contact() {

    const nameRef = useRef('')
    const emailRef = useRef('')
    const messageRef = useRef('')

    function handleSubmit(event) {
        event.preventDefault()

        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }
        alert(`thank you ${data.name}, your message ${data.message} has been sent and we will reply asap at ${data.email}`)
    }


    return ( 
        <div className='contact-container'>
            <p>Fill up the form</p>
            <form action="">
                <label htmlFor="name">
                    <input
                    ref={nameRef} 
                    name="name"
                    tabIndex='1'
                    type="text" 
                    placeholder="your name" 
                    required/>
                </label>
                <label htmlFor="email">
                    <input 
                    ref={emailRef} 
                    name="email"
                    tabIndex='2'
                    type="email" 
                    placeholder="youremail@example.com" 
                    required/>
                </label>
                <label htmlFor="message">
                    <input 
                    ref={messageRef} 
                    name="message"
                    tabIndex='3'
                    type="comment" 
                    placeholder="your message..." 
                    required/>
                </label>
                <button
                onClick={handleSubmit}
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