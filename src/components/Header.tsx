import { useState, FC } from 'react';
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import { VscColorMode } from 'react-icons/vsc'
interface HeaderProps {
    toggleContrast?: boolean,
    setNewContrastState: Function
}
const Header: FC<HeaderProps> = ({toggleContrast, setNewContrastState}: HeaderProps) => {

    const [contrastState, setContrast] = useState(!toggleContrast);
    const toggleContrastOnClick = () =>{
        setContrast(!contrastState)
        setNewContrastState(contrastState)
    }

    return (
        <header>
            <div className="container">
                <FaBars className="mobile-trigger" />
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/roadmap">Roadmap</Link></li>
                    </ul>
                </nav>
                <VscColorMode onClick={toggleContrastOnClick} className="contrast-toggle" />
            </div>
        </header>
    )
}

export default Header