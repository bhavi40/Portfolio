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
                    <p className="about__description">With 4 years of experience building end-to-end machine learning solutions, data pipelines, and cloud-native AI systems, and having completed my Master’s in Computer Science, I am passionate about applying AI, Generative AI, and data engineering to build intelligent, scalable, and production-ready systems.</p>
                    <a download="" href={CV} className="button button--flex">Download Resume
                    <i className="uil uil-file-download"></i>
                    </a>
                  
                </div>
            </div>
        </section>

    )
}

export default About