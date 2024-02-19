import React,{useEffect,useState} from "react";
import './projects.css'
const Projects=()=>{
    const [projects,setProjects]=useState([]);
    useEffect(()=>{
        getProjects().then(setProjects)
    },[])

    async function  getProjects(){
        const url="https://project-adder-backend.onrender.com/api/projects";
        const response=await fetch(url);
        return await response.json();
    }


    function DisplayAll()
    {
        document.getElementById("ProBack").style.display="flex";
        document.getElementById("MoreOpt").style.display="none";
        document.getElementById("LessOpt").style.display="flex";
    }

    function HideAll()
    {
        document.getElementById("ProBack").style.display="none";
        document.getElementById("MoreOpt").style.display="flex";
        document.getElementById("LessOpt").style.display="none";
    }

    return(
        <>
        <section id="project">
            <h1 className="Prohead">My Projects</h1>
            <div className="Projects">
                <div className="Project">
                    <h1>Vpropel Clone</h1>
                    <h3>This is a project in which we have tried making a clone of Vpropel website. It is a platform used by our college where the online coding tests for academic take place .</h3>
                    <a href="https://github.com/mrrajeev29/Vpropel-clone" target="_blank"><button ><i class="fa fa-github"></i>&ensp;Learn More</button></a>
                    <a href="https://mrrajeev29.github.io/Vpropel-clone/" target="_blank"><button><i class="fa fa-external-link">&ensp;</i>open</button></a>
                </div>
                <div className="Project">
                    <h1>Elephent Image Classification</h1>
                    <h3>An image classification neural network for African and Asian elephants can accurately distinguish between the two species using deep learning techniques.</h3>
                    <a href="https://github.com/mrrajeev29/Elephant_Image_Classification" target="_blank"><button ><i class="fa fa-github"></i>&ensp;Learn More</button></a>
                    <a href="https://github.com/mrrajeev29/Elephant_Image_Classification/blob/main/Elephant_Image_Classification.ipynb" target="_blank"><button><i class="fa fa-external-link">&ensp;</i>open</button></a>
                </div>
                <div className="Project">
                    <h1>ToDo List App</h1>
                    <h3>The ultimate to-do app powered by the MERN (MongoDB, Express.js, React, Node.js) stack. To revolutionize task management with a seamless, responsive, and feature-rich experience.</h3>
                    <a href="https://github.com/Debdutta-10/Todolist-frontend" target="_blank"><button ><i class="fa fa-github"></i>&ensp;Learn More</button></a>
                    <a href="https://todolist-frontend-theta.vercel.app/login" target="_blank"><button><i class="fa fa-external-link">&ensp;</i>open</button></a>
                </div>
                <div className="Project">
                    <h1>Next Word prediction using LSTM</h1>
                    <h3>This project predicts the next word in a sequence, showcasing the power of deep learning in natural language processing. Excited about the potential applications in text generation and AI-driven content creation.</h3>
                    <a href="https://github.com/mrrajeev29/Next-Word-prediction-using-LSTM" target="_blank"><button ><i class="fa fa-github"></i>&ensp;Learn More</button></a>
                    <a href="https://github.com/mrrajeev29/Next-Word-prediction-using-LSTM/blob/main/Next_Word_Prediction.ipynb" target="_blank"><button><i class="fa fa-external-link">&ensp;</i>open</button></a>
                </div>
            </div>
            <div className="ProjectsBack" id="ProBack">
                {projects.length>0 && projects.map(project=>(
                <div className="Project">
                    <h1>{project.protit}</h1>
                    <h3>{project.prodesc}</h3>
                    <a href={project.repolink} target="_blank"><button ><i class="fa fa-github"></i>&ensp;Learn More</button></a>
                    <a href={project.prolink} target="_blank"><button><i class="fa fa-external-link">&ensp;</i>open</button></a>
                </div>
                ))}
            </div>
            <div className="MoreOpt" id="MoreOpt">
                <button onClick={DisplayAll}><i class="fa fa-arrow-down"></i>&emsp;More</button>
            </div>
            <div  className="MoreOpt" id="LessOpt" style={{display:"none"}}>
                <button onClick={HideAll}><i class="fa fa-arrow-up"></i>&emsp;Less</button>
            </div>
            <div className="MoreOpt">
                <a href="https://github.com/mrrajeev29" target="_blank"><button><i class="fa fa-github"></i>&emsp;gitHub</button></a>
            </div>
        </section>
        </>
    )
}
export default Projects;
