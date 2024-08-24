import React,{useRef} from "react";
import './contact.css'
import Walmart from '../../assets/tsf.png'
import Adobe from '../../assets/oasis.png'
import Microsoft from '../../assets/Bi.png'
import Facebook from '../../assets/capabl.png'
import fbicon from '../../assets/facebook-icon.png'
import twitter from '../../assets/twitter.png'
import git from '../../assets/github-icon-x.png'
import yt from '../../assets/youtube.png'
import ig from '../../assets/instagram.png' 
import ln from '../../assets/linkedin-icon-logo-png-transparent.png'
import emailjs from '@emailjs/browser';


const Contact=()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_48zsr23', 'template_5nj0kwc', form.current, 'tPfvKUESO_UtAG-Yo')
        .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Emain sent!');
            }, (error) => {
                console.log(error.text);
            });
        };  

    return(
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Walmart" className="clientImg"/>
                    <img src={Adobe} alt="Adobe" className="clientImg"/>
                    <img src={Microsoft} alt="Microsoft" className="clientImg"/>
                    <img src={Facebook} alt="Facebook" className="clientImg"/>
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name='from_name' required/>
                    <input type="email" className="email" placeholder="Your Email" name='from_email' required/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button> 
                    <div>
                        <a href="https://github.com/mrrajeev29" target="_blank"><img src={git} alt="Github" className="link" id="i1"/></a>
                        <a href="https://www.facebook.com/AarabhMalhotra.29" target="_blank"><img src={fbicon} alt="Facebook" className="link"/></a>
                        <a href="https://twitter.com/PrinceG49181050" target="_blank"><img src={twitter} alt="Twitter" className="link"/></a>
                        <a href="https://www.instagram.com/_rajeev_on_line_/" target="_blank"><img src={ig} alt="Instagram" className="link"/></a>
                        <a href="https://www.linkedin.com/in/rajeev-ranjan-9990b9226/" target="_blank"><img src={ln} alt="Linkedin" className="link"/></a>
                    </div>
                </form>
            </div>
        </section>
    )
 }


 export default Contact
