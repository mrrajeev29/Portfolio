import React from "react";
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
const Skills=()=>{
    function display1()
    {
        document.getElementById("py").style.display="flex";
        document.getElementById("hide").style.display="none";
    }
    function Hide1()
    {
        document.getElementById("py").style.display="none";
        document.getElementById("hide").style.display="flex";
    }
    function display2()
    {
        document.getElementById("c").style.display="flex";
        document.getElementById("hide").style.display="none";
    }
    function Hide2()
    {
        document.getElementById("c").style.display="none";
        document.getElementById("hide").style.display="flex";
    }
    function display3()
    {
        //alert("ok")
        document.getElementById("cpp").style.display="flex";
        document.getElementById("hide").style.display="none";
    }
    function Hide3()
    {
        document.getElementById("cpp").style.display="none";
        document.getElementById("hide").style.display="flex";
    }
    function display4()
    {
        document.getElementById("java").style.display="flex";
        document.getElementById("hide").style.display="none";
    }
    function Hide4()
    {
        document.getElementById("java").style.display="none";
        document.getElementById("hide").style.display="flex";
    }
    function display5()
    {
        document.getElementById("js").style.display="flex";
        document.getElementById("hide").style.display="none";
    }
    function Hide5()
    {
        document.getElementById("js").style.display="none";
        document.getElementById("hide").style.display="flex";
    }
    function display6()
    {
        document.getElementById("sql").style.display="flex";
        document.getElementById("hide").style.display="none";
    }
    function Hide6()
    {
        document.getElementById("sql").style.display="none";
        document.getElementById("hide").style.display="flex";
    }
    function display7()
    {
        document.getElementById("html").style.display="flex";
        document.getElementById("hide").style.display="none";
    }
    function Hide7()
    {
        document.getElementById("html").style.display="none";
        document.getElementById("hide").style.display="flex";
    }
    function display8()
    {
        document.getElementById("css").style.display="flex";
        document.getElementById("hide").style.display="none";
    }
    function Hide8()
    {
        document.getElementById("css").style.display="none";
        document.getElementById("hide").style.display="flex";
    }
    function display9()
    {
        document.getElementById("bs").style.display="flex";
        document.getElementById("hide").style.display="none";
    }
    function Hide9()
    {
        document.getElementById("bs").style.display="none";
        document.getElementById("hide").style.display="flex";
    }
    function display10()
    {
        document.getElementById("react").style.display="flex";
        document.getElementById("hide").style.display="none";
    }
    function Hide10()
    {
        document.getElementById("react").style.display="none";
        document.getElementById("hide").style.display="flex";
    }
    function display11()
    {
        document.getElementById("node").style.display="flex";
        document.getElementById("hide").style.display="none";
    }
    function Hide11()
    {
        document.getElementById("node").style.display="none";
        document.getElementById("hide").style.display="flex";
    }
    function display12()
    {
        document.getElementById("exp").style.display="flex";
        document.getElementById("hide").style.display="none";
    }
    function Hide12()
    {
        document.getElementById("exp").style.display="none";
        document.getElementById("hide").style.display="flex";
    }
    function display13()
    {
        document.getElementById("md").style.display="flex";
        document.getElementById("hide").style.display="none";
    }
    function Hide13()
    {
        document.getElementById("md").style.display="none";
        document.getElementById("hide").style.display="flex";
    }
    return(
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am Computer Science Student and a skilled web designer with experience in creating visual appealing and user-friendly<br/>websites. I have a strong understanding of design and a keen eye for detail. I am proficient in JavaScript and in MERN development as well as I am good in Data Science and Analysis.</span>
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
            <h1  className="skillTitle">My Skills</h1>
            <div id="hide" style={{display:"flex"}}>
                    <div className="hide">
                    </div>
            </div>
            <div className="skill" id="py">
                    <div className="py">
                    </div>
            </div>
                <div className="skill" id="c">
                    <div className="c">
                    </div>
                </div>
                <div className="skill" id="cpp">
                    <div className="cpp">
                    </div>
                </div>
                <div className="skill" id="java">
                    <div className="java">
                    </div>
                </div>
                <div className="skill" id="js">
                    <div className="js">
                    </div>
                </div>
                <div className="skill" id="sql">
                    <div className="sql">
                    </div>
                </div>
                <div className="skill" id="html">
                    <div className="html">
                    </div>
                </div>
                <div className="skill" id="css">
                    <div className="css">
                    </div>
                </div>
                <div className="skill" id="bs">
                    <div className="bs">
                    </div>
                </div>
                <div className="skill" id="react">
                    <div className="react">
                    </div>
                </div>
                <div className="skill" id="node">
                    <div className="node">
                    </div>
                </div>
                <div className="skill"  id="exp">
                    <div className="exp">
                    </div>
                </div>
                <div className="skill" id="md">
                    <div className="md">
                    </div>
                </div>
            
            <div>
                <img className="sicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" onMouseEnter={display1} onMouseLeave={Hide1}/> 
                <img className="sicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" onMouseEnter={display2} onMouseLeave={Hide2} />
                <img className="sicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" onMouseEnter={display3} onMouseLeave={Hide3} />
                <img className="sicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" onMouseEnter={display4} onMouseLeave={Hide4} />
                <img className="sicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" onMouseEnter={display5} onMouseLeave={Hide5} />
                <img className="sicon"  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" onMouseEnter={display6} onMouseLeave={Hide6} />
                <img className="sicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" onMouseEnter={display7} onMouseLeave={Hide7} />
                <img className="sicon"   src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" onMouseEnter={display8} onMouseLeave={Hide8} />
                <img className="sicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" onMouseEnter={display9} onMouseLeave={Hide9} />
                <img className="sicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" onMouseEnter={display10} onMouseLeave={Hide10} />
                <img className="sicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" onMouseEnter={display11} onMouseLeave={Hide11} />
                <i  style={{fontSize:"5rem"}} class="devicon-express-original-wordmark" onMouseEnter={display12} onMouseLeave={Hide12}></i>
                <img className="sicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" onMouseEnter={display13} onMouseLeave={Hide13} />
            </div>
        </section>
    );
}

export default Skills
