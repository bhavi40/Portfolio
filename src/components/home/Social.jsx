import tableauIcon from "../../assets/tableau.svg";
function Social(){
    return(
        <div className="home__social">
            <a href="https://public.tableau.com/app/profile/bhavishya.vudatha/vizzes" className="home_social-icon" target="_blank">
                <img
          src={tableauIcon}
          alt="Tableau"
          style={{ width: "20px", height: "20px" }}
        />
            </a>
        
            <a href="https://www.linkedin.com/in/bhavishya-vudatha-320a7b167/
" className="home__social-icon" target="_blank">
            <i className="uil uil-linkedin"></i>
            </a>
            <a href="https://github.com/bhavi40" className="home__social-icon" target="_blank">
            <i className="uil uil-github-alt"></i>
            </a>
        </div>
    )
}

export default Social