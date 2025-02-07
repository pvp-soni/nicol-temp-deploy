import React from 'react'
import './buttons.css'

const Contact_us = () => {
  return (

    <>

    <div className="default_page_navigation_div">
        <div className="default_page_heading">Contact Us</div>
        <div className="default_page_navigation_links"><a href='/'>Home</a> | Contact Us</div>
    </div>

    <div className="contact_us_main_bg">
      <div className="contact_us">
        Contact Us
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59054.10566546525!2d70.767238!3d22.320317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c915531c332d%3A0xce014907c17a41ed!2sThe%20One%20World!5e0!3m2!1sen!2sus!4v1737437708327!5m2!1sen!2sus" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p className="contact_numbers">
          +91 98989 89898 <br />
          +91 98989 89898
        </p>
      </div>
      <div className="any_questions">
        <div className="any_questions_heading">Any Questions</div>
        <div className="any_questions_form">
          <form action="">
            <div className="form_group">
              <label for="name">Name</label>
              <input type="text" placeholder='Enter your name here'/>
            </div>
            <div className="form_group">
              <label for="name">Email</label>
              <input type="text" placeholder='Enter your email here'/>
            </div>
            <div className="form_group">
              <label for="name">Phone Number</label>
              <input type="text" placeholder='Enter your phone number here'/>
            </div>
            <div className="form_group">
              <label for="name">Message</label>
              <textarea type="text" placeholder='Enter your message here'/>
            </div>
            <div className="form_group">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>

    </>
  )
}

export default Contact_us