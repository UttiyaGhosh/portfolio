import Logo from "../images/Logo.png"

export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img className="nav-logo" src={Logo} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item <%= navTitle=='Home' ? 'active' : ''%>">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item <%= navTitle=='Skills' ? 'active' : ''%>">
                            <a className="nav-link" href="/skills">Skills</a>
                        </li>
                        <li className="nav-item <%= navTitle=='Education' ? 'active' : ''%>">
                            <a className="nav-link" href="/education">Education</a>
                        </li>
                        <li className="nav-item <%= navTitle=='Work' ? 'active' : ''%>">
                            <a className="nav-link" href="/work">Work</a>
                        </li>
                        <li className="nav-item <%= navTitle=='Project' ? 'active' : ''%>">
                            <a className="nav-link" href="/project">Project</a>
                        </li>
                        <li className="nav-item <%= navTitle=='Certifications' ? 'active' : ''%>">
                            <a className="nav-link" href="/certifications">Certifications</a>
                        </li>
                        <li className="nav-item <%= navTitle=='Publications' ? 'active' : ''%>">
                            <a className="nav-link" href="/publications">Publications</a>
                        </li>
                        <li className="nav-item <%= navTitle=='Contact' ? 'active' : ''%>">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}