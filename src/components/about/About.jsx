import "./About.css";
import AboutImg from "../../assets/Profilepic.jpg";
import CV from "../../assets/Bhavishya_Resume.pdf";
import Info from "./info";
function About(){
    return(
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">
                    <Info/>
                    <p className="about__description">I bring 3 years of industry experience as a React Developer, where I built and optimized enterprise web applications using React.js, JavaScript, and SQL. Now, as a Master’s student, I am expanding my knowledge in AI, machine learning, and modern web technologies to create impactful and user-friendly digital solutions.</p>
                    <a download="" href={CV} className="button button--flex">Download Resume
                    <i className="uil uil-file-download"></i>
                    </a>
                  
                </div>
            </div>
        </section>

    )
}

export default About