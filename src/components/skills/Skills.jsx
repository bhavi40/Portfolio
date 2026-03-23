import "./skills.css";
import Software from "./Software";
import DataScience from "./DataScience";
import DataEngineer from "./DataEngineer";
function Skills(){
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>


            <div className="skills__container container grid">
                <Software/>

                <DataScience/>
                <DataEngineer/>
                
            </div>
        </section>
    )
}

export default Skills