import "./qualification.css"
function Qualification(){
    return(
        <section className="qualification__section">
             <h2 className="section__title">Qualification</h2>
             <span className="section__subtitle">My personal journey</span>

             <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__name">
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div className="qualification__name">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Master&apos;s in Computer Science</h3>
                                <span className="qualification__subtitle">University of Colorado Denver</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>&nbsp;2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Software Development Engineer</h3>
                                <span className="qualification__subtitle">Accenture</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>&nbsp;2019 - 2023
                                </div>
                            </div>

                            

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor&apos;s in Computer Science</h3>
                                <span className="qualification__subtitle">JNTUK University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>&nbsp;2015 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        
                    </div>

                    
                </div>
             </div>

        </section>
    )
}

export default Qualification