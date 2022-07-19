import React from 'react'

function ContactForm () {
    return (
        <>
            <div className='contact-sidebar'>
                <div className='visit-us'>
                    <div className='visit-us-header'>
                        <h1>Visit Us</h1>
                    </div>
                    <div className='visit-location'>
                        <i className="fas fa-map-marker-alt"/> 	&nbsp; Level 1, House 188, Road 8, Block C, Bashundhara R/A <br/>
                        Dhaka, Bangladesh.
                    </div>

                </div>
                <div className='contact-us'>
                    <div className='contact-us-header'>
                        <h1>Contact Us</h1>
                    </div>
                    <div className='footer-phone'>
                        <i className="fas fa-phone-alt"/>	&nbsp;01936-800976
                    </div>
                    <div className='contact-mail'>
                        <i className="fas fa-envelope"/>	&nbsp; spadeadigital@gmail.com
                    </div>
                </div>
            </div>
            <div className='contact-form'> 
                <form>
                    <div className="mb-3">
                        <input type="name" className="form-control" placeholder="Your Name"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <input type="phone" className="form-control" placeholder="Phone Number"/>
                    </div>
                    
                    <div className="mb-3">
                        <textarea className="form-control" rows="3" placeholder="Your Message"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm;