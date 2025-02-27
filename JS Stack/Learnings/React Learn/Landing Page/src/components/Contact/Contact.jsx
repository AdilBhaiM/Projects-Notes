import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import btnImg from '../../assets/white-arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "9513d673-3683-480d-b1b5-49366918678d");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };
  return (
    <div className="contact">
        <div className="left">
            <div className="heads">
                <h3>Send us a message <img src={message_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            </div>
            <div className="info">
                <div className="our-info">
                    <img src={mail_icon} alt="" />
                    <p>Contact@GreatStack.dev</p>
                </div>
                <div className="our-info">
                    <img src={phone_icon} alt="" />
                    <p>+1 123-456-7890</p>
                </div>
                <div className="our-info">
                    <img src={location_icon} alt="" />
                    <p>77 Massachusetts Ave, Cambridge
                        MA 02139, United States</p>
                </div>
            </div>
            
        </div>
        <form onSubmit={onSubmit} className="right">
            <div className="inputs">
                <div className="input-name input">
                    <p>Your name</p>
                    <input type="text" name='name' required/>
                </div>
                <div className="input-number input">
                    <p>Phone Number</p>
                    <input type="text" name='number' required/>
                </div>
                <div className="input-email input">
                    <p>Your Email</p>
                    <input type="email" name='email' required/>
                </div>
                <div className="input-message input">
                    <p>Write your messages here</p>
                    <textarea type="text" name='Message' required/>
                </div>
            </div>
            <button className='btn' type='submit'><p>Submit </p><img src={btnImg} alt=''/></button>
            <p>{result}</p>
        </form>
    </div>
  )
}

export default Contact