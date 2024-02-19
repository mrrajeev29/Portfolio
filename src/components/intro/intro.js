import React from "react";
import './intro.css';
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'
import bg from'../../assets/image-removebg-preview (3).png'
import btn1 from '../../assets/resume.png'
import sample from './video2.mp4'
const Intro=()=>{
    return(
        <>
        <video autoPlay loop muted className="vido">
        <source src={sample} type="video/mp4"/>
        </video>
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm<span className="introName"> Rajeev Ranjan</span><br/> Website Designer <span>and<br/>Data Scientist</span></span>
                <p className="introPara">I am a skilled web designer and Data Scientist with experience in creating<br/>visual appealing and user-friendly websites.</p>
                <table>
                    <tr>
                        <td><Link activeClass="active" to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className="btn"> <i class="fa fa-briefcase"></i>&emsp;Hire me</button></Link>   <a href="https://drive.google.com/drive/folders/1Nid_0MDuKcxgwmtscK5EKGHutrz5y49i" target="_blank"><button className="btn1"><i class="fa fa-file-pdf-o"></i>&emsp;Resume</button></a></td>
                    </tr>
                </table>
                
            </div>
            <img src={bg} alt="profile" className="bg"/>
        </section>
        </>
    )
}

export default Intro;
