import React from "react";
import './projects.css'

function Display()
{
    document.getElementById("display1").style.display="flex";
    document.getElementById("display2").style.display="flex";
    document.getElementById("display3").style.display="flex";
    document.getElementById("display4").style.display="flex";
    document.getElementById("display5").style.display="flex";
    document.getElementById("switch2").style.display="flex";
    document.getElementById("switch1").style.display="none";
}

function Hide()
{
    document.getElementById("display1").style.display="none";
    document.getElementById("display2").style.display="none";
    document.getElementById("display3").style.display="none";
    document.getElementById("display4").style.display="none";
    document.getElementById("display5").style.display="none";
    document.getElementById("switch1").style.display="flex";
    document.getElementById("switch2").style.display="none";
    document.getElementById("Dswitch").style.marginTop="0.35rem";
    document.getElementById("Dswitch").style.marginLeft="0.2rem"
}


const Projects=()=>{
    return (
        <section id="project">
            <h1 className="title">Some of my Projects.</h1>
            <div className="pro1">
                <h4 className="proTit">Vpropel Clone</h4>
                <h4 className="proDesc">A Coding platform for students used by VIT.</h4>
                <a href="https://github.com/mrrajeev29/Vpropel-clone" target="_blank"><button type="button" className="Pbtn"><i class="fa fa-github"></i>&ensp;Learn More</button></a>
                <a href="https://mrrajeev29.github.io/Vpropel-clone/" target="_blank"><button type="button" className="Pbtn"><i class="fa fa-external-link">&ensp;</i>Open</button></a>
            </div>
            <div className="pro2">
                <h4 className="proTit">Portfolio</h4>
                <h4 className="proDesc">This project is a Portfolio website for my friend and created using MERN.</h4>
                <a href="https://github.com/mrrajeev29/Portfolio-project" target="_blank"><button type="button" className="Pbtn"><i class="fa fa-github"></i>&ensp;Learn More</button></a>
                <a href="https://portfolio-project-lac-five.vercel.app/" target="_blank"><button type="button" className="Pbtn"><i class="fa fa-external-link">&ensp;</i>Open</button></a>
            </div>
            <div className="pro1">
                <h4 className="proTit">Calculator Using React </h4>
                <h4 className="proDesc">A basic Arithmetic Calculator using MERN.</h4>
                <a href="https://github.com/mrrajeev29/Calculator-Using-React" target="_blank"><button type="button" className="Pbtn"><i class="fa fa-github"></i>&ensp;Learn More</button></a>
                <a href="https://calculator-using-react-psi.vercel.app/" target="_blank"><button type="button" className="Pbtn"><i class="fa fa-external-link">&ensp;</i>Open</button></a>
            </div>
            <div style={{display:"none"}} className="pro2"  id="display1">
                <div style={{marginTop: "-2rem"}}>
                <h4 className="proTit">Elephant Image Classification</h4>
                <h4 className="proDesc">Classification of elephants using Deep Learning</h4>
                <a href="https://github.com/mrrajeev29/Elephant_Image_Classification" target="_blank"><button type="button" className="Pbtn"><i class="fa fa-github"></i>&ensp;Learn More</button></a>
                <a href="https://github.com/mrrajeev29/Elephant_Image_Classification/blob/main/Elephant_Image_Classification.ipynb" target="_blank"><button type="button" className="Pbtn"><i class="fa fa-external-link">&ensp;</i>Explore</button></a>
                </div>
            </div>
            <div className="pro1" style={{display:"none"}} id="display2">
            <div style={{marginTop: "-2rem"}}>
                <h4 className="proTit">Transcription of video files using API.</h4>
                <h4 className="proDesc">This project can produce transcription of video files.</h4>
                <a href="https://github.com/mrrajeev29/Transcription-of-video-file-using-API" target="_blank"><button target="button" className="Pbtn"><i class="fa fa-github"></i>&ensp;Learn More</button></a>
                <a href="https://github.com/mrrajeev29/Transcription-of-video-file-using-API/blob/main/Rajeev_Transcript.ipynb" target="_blank"><button target="button" className="Pbtn"><i class="fa fa-external-link">&ensp;</i>Explore</button></a>
            </div>
            </div>
            <div className="pro2" style={{display:"none"}} id="display3">
            <div style={{marginTop: "-2rem"}}>
                <h4 className="proTit">Speech to text using Generative Ai.</h4>
                <h4 className="proDesc">Using Generative Ai to convert speech to text.</h4>
                <a href="https://github.com/mrrajeev29/Speech_to_text_Generative_Ai_using_openAi_apikey" target="_blank"><button type="button" className="Pbtn"><i class="fa fa-github"></i>&ensp;Learn More</button></a>
                <a href="https://github.com/mrrajeev29/Speech_to_text_Generative_Ai_using_openAi_apikey/blob/main/Rajeev_Ranjan_Text_to_Text_Ai.ipynb" target="_blank"><button type="button" className="Pbtn"><i class="fa fa-external-link">&ensp;</i>Explore</button></a>
            </div>
            </div>
            <div className="pro1" style={{display:"none"}} id="display4">
            <div style={{marginTop: "-2rem"}}>
                <h4 className="proTit">Heart Disease Prediction.</h4>
                <h4 className="proDesc">Using R Programming language this model is trained for predicting heart disease and also include Statistical Analysis.</h4>
                <a href="https://github.com/mrrajeev29/Heart-Disease-Prediction" target="_blank"><button type="button" className="Pbtn"><i class="fa fa-github"></i>&ensp;Learn More</button></a>
                <a href="https://github.com/mrrajeev29/Heart-Disease-Prediction/blob/main/Heart%20Disease%20Prediction.pptx" target="_blank"><button type="button" className="Pbtn"><i class="fa fa-external-link">&ensp;</i>Explore</button></a>
            </div>
            </div>
            <div className="pro2" style={{display:"none"}} id="display5">
            <div style={{marginTop: "-2rem"}}>
                <h4 className="proTit">Covid Data Visualization</h4>
                <h4 className="proDesc">Visualization of Covid 19 happened all over the world.</h4>
                <a href="https://github.com/mrrajeev29/Covid_Data_Visualization" target="_blank"><button type="button" className="Pbtn"><i class="fa fa-github"></i>&ensp;Learn More</button></a>
                <a href="https://github.com/mrrajeev29/Covid_Data_Visualization/blob/main/Worldometer_data_Visualization.ipynb" target="_blank"><button type="button" className="Pbtn"><i class="fa fa-external-link">&ensp;</i>Explore</button></a>
            </div>
            </div>
            <button type="button" onClick={Display} className="Abtn" id="switch1"><div id="Dswitch">&ensp;<i class="fa fa-arrow-circle-down" ></i>&ensp;More&ensp;</div></button>
            <button type="button" onClick={Hide} className="Abtn" style={{display:"none"}} id="switch2"><div style={{marginTop:"0.35rem",marginLeft:"0.8rem"}}>&ensp;<i class="fa fa-arrow-circle-up"></i>&ensp;Less&ensp;</div></button>
            <a href="https://github.com/mrrajeev29" target="_blank"><button type="button" className="Abtn">&emsp;<i class="fa fa-github"></i>&ensp;All&ensp;&emsp;</button></a>      
        </section>
    )
}
export default Projects
