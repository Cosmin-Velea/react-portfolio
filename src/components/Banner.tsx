import { FC } from 'react'
import { useLocation } from "react-router-dom";

const Banner: FC = () => {
    const location = useLocation();
    const pathName = location.pathname.split('/')[1];
    interface textObject {
        projects: string,
        roadmap: string
    }
    const bannerTexts: textObject = {
        projects: 'Projects',
        roadmap: "Roadmap"
    }
    const innerPageText = bannerTexts[pathName as keyof textObject];

    return (
        <div className="banner">
            <div className="container">
                <h1>
                    {pathName === "" ? "Portfolio" : innerPageText}
                </h1>
            </div>
        </div>
    )
}

export default Banner