function Info(){
    return(
        <div className="about__info grid">
            <div className="about__box">
            <i className='bx bx-award about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">4 years in AI & ML Engineering.</span>
            </div>

            <div className="about__box">
            <i className='bx bx-folder about__icon'></i>
           
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">
          <a 
            href="https://github.com/bhavi40" 
            target="_blank" 
            rel="noopener noreferrer"
            className="about__link"
          >
            10+ projects
          </a>
        </span>
            </div>

            <div className="about__box">
            <i className='bx bx-briefcase-alt about__icon' ></i>
                <h3 className="about__title">Open to</h3>
                <span className="about__subtitle">ML Engineer | Data Scientist | AI Engineer</span>
            </div>
        </div>
    )
}

export default Info