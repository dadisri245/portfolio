import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact=()=>{
    const form=useRef() 
    const sendEmail = (e) => {
        e.preventDefault()   
        emailjs.sendForm('service_hpzftp4', 'template_f238hdp', form.current, 'jpNLJndpB9PZ5CfiG')
        e.target.reset()
    };
    return(
        <section id='contact'>
            <h2>Contact me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>dadisri2003@gmail.com</h5>
                        <a href='mailto:dadisri2003@gmail.com'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>Whatsapp</h4>
                        <a href='https://wa.me/919381434976' rel='noreferrer' target='_blank'>Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your full name' required/>
                    <input type='email' name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact