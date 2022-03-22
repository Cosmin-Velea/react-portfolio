import TasksComponent from "./components/Tasks/TasksComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, FC } from "react";
import "./App.scss";

const App: FC = () => {
    const [toggleContrast, setContrast] = useState(false);
    const [toggleMobile, setMobile] = useState(false);
    const appClasses = ['Portfolio'];
    if (toggleContrast) {
        appClasses.push('js--contrast');
    } if (toggleMobile) {
        appClasses.push('js--mobile');
    }
    return (
        <Router>
            <div className={appClasses.join(' ')}>
                <Header setNewContrastState={setContrast} setNewMobileState={setMobile} />
                <Banner />
                <main>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/tasks" element={<TasksComponent />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
