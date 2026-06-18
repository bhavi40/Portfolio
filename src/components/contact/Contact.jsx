import "./Contact.css"
function Contact(){
    return(
        <section className="contact section" id="contact">
             <h2 className="section__title">Get in touch</h2>
             <span className="section__subtitle">Contact Me</span>

             <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">bhavishya@jobrequires.com</span>

                            <a href="mailto:bhavishya@jobrequires.com" className="contact__button">Write me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Phone</h3>
                            <span className="contact__card-data">+1 (601)-(207)-1262</span>

                            
                        </div>
                    </div>
                </div>
             </div>
        </section>
    )
}

export default Contact