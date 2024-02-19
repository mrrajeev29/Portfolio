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

    return(
        <>
        <section id="project">
            <div className="Projects">
                {projects.length>0 && projects.map(project=>(
                <div className="Project">
                    <h1>{project.protit}</h1>
                    <h3>{project.prodesc}</h3>
                    <a href={project.repolink}><button ><i class="fa fa-github"></i>&ensp;Learn More</button></a>
                    <a href={project.prolink}><button><i class="fa fa-external-link">&ensp;</i>open</button></a>
                </div>
                ))}
            </div>
            <div>

        </div>
        </section>
        </>
    )
}
export default Projects;
