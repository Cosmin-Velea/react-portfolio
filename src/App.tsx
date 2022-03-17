import TasksComponent from "./components/Tasks/TasksComponent";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, FC } from "react";
import "./App.scss";

const App: FC = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/tasks" element={<TasksComponent />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
