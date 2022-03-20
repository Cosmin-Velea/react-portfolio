import TasksComponent from "./components/Tasks/TasksComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, FC } from "react";
import "./App.scss";

const App: FC = () => {
    const [toggleContrast, setContrast] = useState(false);
    return (
        <Router>
            <div className={toggleContrast ? "Portfolio js--contrast" : "Portfolio"}>
                <Header setNewContrastState={setContrast} />
                <Banner />
                <main>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/tasks" element={<TasksComponent />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
