import React from "react";
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
const Skills=()=>{
    return(
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled web designer with experience in creating visual appealing and user-friendl<br/>websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML,CSS and JavaScript, as well as I am good in Data Science and Analysis.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Data Scientist</h2>
                        <a href="https://github.com/mrrajeev29/Elephant_Image_Classification" className="web">Click for latest Project.</a>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Frontend Developer</h2>
                        <a href="https://mrrajeev29.github.io/Vpropel-clone/" className="web">Click for latest Project.</a>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Backend Developer</h2>
                        <a href="https://github.com/mrrajeev29/Portfolio-project" className="web">Click for latest Project.</a>
                    </div>
                </div>
            </div>       
        </section>
    );
}

export default Skills
