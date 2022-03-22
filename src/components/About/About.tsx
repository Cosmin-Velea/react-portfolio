import {Link} from 'react-router-dom'
import profilePic from '../../images/portfolio-photo.jpg'

const About = () => {
    return (
        <div className="container">
            <div className="about-me">
                <div className="about-me__photo">
                    <img src={profilePic} alt="Portfolio" />
                </div>
                <div className="about-me__text">
                    <h2>About me</h2>
                    <p><b>Front-end Developer</b> with 6 years experience in <b>Javascript/HTML/SCSS/GIT</b>.</p>
                    <p><b>Fast learner</b>, had to learn new things in different domains I've worked in and I'm always open to learning new things.</p>
                    <p>For a full roadmap of my work experience you can check the <Link className="site-link" to="/roadmap">roadmap</Link></p>
                </div>
            </div>
        </div>
    )
}

export default About