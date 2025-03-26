function Info(){
    return(
        <div className="about__info grid">
            <div className="about__box">
            <i className='bx bx-award about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">3 years in SoftDev</span>
            </div>

            <div className="about__box">
            <i className='bx bx-folder about__icon'></i>
           
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">10+ projects</span>
            </div>

            <div className="about__box">
            <i className='bx bx-briefcase-alt about__icon' ></i>
                <h3 className="about__title">Open to Intern</h3>
                <span className="about__subtitle">AI|SDE</span>
            </div>
        </div>
    )
}

export default Info