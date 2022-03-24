import { useState, FC } from 'react';
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import { VscColorMode } from 'react-icons/vsc'
interface HeaderProps {
    toggleContrast?: boolean,
    setNewContrastState: Function,
    toggleMobile?: boolean,
    setNewMobileState: Function
}
const Header: FC<HeaderProps> = ({toggleContrast, setNewContrastState, toggleMobile, setNewMobileState}: HeaderProps) => {

    const [contrastState, setContrast] = useState(!toggleContrast);
    const [mobileState, setMobile] = useState(!toggleMobile);
    const toggleContrastOnClick = () =>{
        setContrast(!contrastState)
        setNewContrastState(contrastState)
    }
    const toggleMobileOnClick = () =>{
        setMobile(!mobileState)
        setNewMobileState(mobileState)
    }
    return (
        <header>
            <div className="container">
                <FaBars className="mobile-trigger" onClick={toggleMobileOnClick} />
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/timeline">Timeline</Link></li>
                    </ul>
                </nav>
                <VscColorMode onClick={toggleContrastOnClick} className="contrast-toggle" />
            </div>
        </header>
    )
}

export default Header