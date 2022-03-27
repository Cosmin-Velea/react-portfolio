import { FC } from 'react'
import { useLocation } from "react-router-dom";

const Banner: FC = () => {
    const location = useLocation();
    const pathName = location.pathname.split('/')[1];
    interface textObject {
        projects: string,
        timeline: string
        tasks: string
    }
    const bannerTexts: textObject = {
        projects: 'Projects',
        timeline: 'Timeline',
        tasks: 'Tasks'
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