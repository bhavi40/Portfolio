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
                    <p className="about__description">From building robust data pipelines to developing predictive ML models at Accenture for 3+ Years, I have recently completed my Master’s in Computer Science with a 4.0 GPA, I’m now pursuing an ML Engineer role where I can design and deploy full-stack, production-ready machine learning systems.</p>
                    <a download="" href={CV} className="button button--flex">Download Resume
                    <i className="uil uil-file-download"></i>
                    </a>
                  
                </div>
            </div>
        </section>

    )
}

export default About