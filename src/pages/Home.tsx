import Navbar from "../components/Navbar";
import MyAnime from "../../src/images/MyAnime.jpeg";
import GoogleScholarIcon from "../../src/images/GoogleScholarIcon.png";
import '../styles/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



export default function Home() {
    return (
        <>
            <Navbar />
            <div className="container-fluid home-container">
                <div className="row">
                    <div className="col-0 col-md-1"></div>
                    <div className="col-12 col-md-5">

                        <h1 className="home-heading"> Hi! I'm Uttiya Ghosh</h1>

                        <p className="home-about">
                            With over 5 years of Java backend development experience, I am adept at planning, documentation,
                            and creating web solutions for a global user base. Recently venturing into full-stack development,
                            I am expanding my skills to encompass the entire development spectrum. Eager to contribute my
                            well-rounded expertise to your organization as a backend developer, I am committed to bridging the
                            gap between front-end and back-end technologies. My journey into full-stack development reflects my
                            dedication to continuous learning and adapting to industry trends, ensuring a versatile skill set to
                            address the evolving needs of your projects.
                        </p>

                        <p className="d-flex justify-content-between icon-para">
                            <a href="https://www.linkedin.com/in/uttiyaghosh/" target="_blank"
                                rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="icon-linkedIn" size="2x" />
                            </a>

                            <a href="https://github.com/UttiyaGhosh" target="_blank"
                                rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="icon-github" size="2x" />
                            </a>
                            <a href="mailto:your-email@gmail.com" target="_blank"
                                rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} className="icon-gmail" size="2x" />
                            </a>
                            <a href="https://scholar.google.com/citations?hl=en&user=mCVJVOUAAAAJ" target="_blank"
                                rel="noopener noreferrer">
                                <img className="icon-google-scholar" src={GoogleScholarIcon} alt="GS" />
                            </a>
                        </p>
                    </div>
                    <div className="col-0 col-md-1"></div>
                    <div className="col-0 col-md-4">
                        <img className="anime-img" src={MyAnime} alt="Uttiya Ghosh" />
                    </div>
                </div>
            </div>
        </>
    )
}