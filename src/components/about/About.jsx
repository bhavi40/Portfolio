import "./About.css";
import AboutImg from "../../assets/Profilepic.jpg";
import CV from "../../assets/Bhavishya_Resume.pdf";
import Info from "./Info";

function About(){
    return(
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">
                    <Info/>
                    <p className="about__description">With 3+ years of experience in software and Azure Data Engineering, I’ve developed scalable ADF–Databricks pipelines, automated SQL jobs, and migrated large operational datasets into Azure Data Lake, built MERN API’s. I’m now strengthening my skills in ML and AI during my Master’s so I can build smarter, cloud-native data systems end-to-end.</p>
                    <a download="" href={CV} className="button button--flex">Download Resume
                    <i className="uil uil-file-download"></i>
                    </a>
                  
                </div>
            </div>
        </section>

    )
}

export default About