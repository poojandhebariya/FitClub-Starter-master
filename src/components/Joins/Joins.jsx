import React, { useRef } from 'react'
import './Joins.css'
import emailjs from '@emailjs/browser'

function Joins() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_spxk5qr', 'template_o2qngbi', form.current, 'lZkUZmHhVItsG663d')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div className='Join' id='Join-us'>
      <div className="left-j">
        <hr />
        <div>
            <span className='stroke-text'>ready to</span>
            <span> level up</span>
        </div>

        <div>
            <span>your body</span>
            <span className='stroke-text'> with us ?</span>
        </div>

      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder='Enter your Email address' />
            <button className='btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Joins
