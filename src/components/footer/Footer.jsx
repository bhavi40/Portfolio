import "./footer.css"
function Footer(){
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Bhavishya</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                 
                </ul>

                
                <span className="footer__copy">
                    &#169; Crypticalcoder. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer