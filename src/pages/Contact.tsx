import Navbar from "../components/navbar"

export default function Contact(){
    return (
        <>
            <Navbar />
            <div className="container-fluid">
            <h1 className="contact-header">Get in Touch</h1>
            <h3 className="contact-text">Let's start a project together! I will be glad to answer your questions.</h3>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5 contact-leftDiv">
                    <p>
                        <a href="https://www.linkedin.com/in/uttiyaghosh/" target="_blank">
                            <i className="fab fa-linkedin fa-2x icon-linkedIn">&nbsp; </i> https://www.linkedin.com/in/uttiyaghosh/
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/UttiyaGhosh" target="_blank"
                            rel="noopener noreferrer">
                            <i className="fab fa-github fa-2x icon-github"></i> https://github.com/UttiyaGhosh
                        </a>
                    </p>
                    <p>
                        <a href="mailto:uttiyaghosh@gmail.com" target="_blank"
                            rel="noopener noreferrer">
                            <i className="far fa-envelope fa-2x icon-gmail"></i> uttiyaghosh@gmail.com
                        </a>
                    </p>
                    <p>
                        <a href="https://scholar.google.com/citations?hl=en&user=mCVJVOUAAAAJ" target="_blank"
                            rel="noopener noreferrer">
                            <img className= "icon-google-scholar" src="/images/googleScholarIcon.png" alt="Google Scholar"/>
                            https://scholar.google.com/citations?hl=en&user=mCVJVOUAAAAJ
                        </a>
                    </p>
                </div>
                <div className="col-1"></div>
                <div className="col-4 contact-rightDiv">
                    <form>
                        <div className="form-group row">
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="form-group row">
                            <input type="text" className="form-control" placeholder="Email"/>
                        </div>
                        <div className="form-group row"> 
                            <input type="text" className="form-control" placeholder="Subject"/>
                        </div>
                        <div className="form-group row"> 
                            <textarea className="form-control" placeholder="Message"></textarea>
                        </div>
                        <div className="form-group row">                        
                            <input type="button" className="btn btn-success contact-button" value="Send Message"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}