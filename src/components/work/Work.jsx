import "./work.css"
import Works from "./Works"


function Work(){
    return(
        <section className="work section" id='portfolio'>
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent projects</span>

            <Works/>
           
        </section>
    )
}

export default Work