import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div className="container">
            <div className="projects-listing">
                <div className="projects-listing__items">
                    <div className="projects-listing__item">
                        <Link to="/projects/clock">
                            <div className="projects-listing__thumb">
                                <img src="" alt="Thumbnail" />
                            </div>
                            <div className="projects-listing__content">
                                <div className="projects-listing__title">
                                    JS Clock
                                </div>
                                <div className="projects-listing__desc">
                                    A js clock with the ability to change between 12h/24h
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="projects-listing__item">
                        <Link to="/tasks">
                            <div className="projects-listing__thumb">
                                <img src="" alt="Thumbnail" />
                            </div>
                            <div className="projects-listing__content">
                                <div className="projects-listing__title">
                                    Tasks Manager
                                </div>
                                <div className="projects-listing__desc">
                                    A task manager with local storage
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects