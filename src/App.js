import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom"
import AllEmployee from "./page/AllEmployee";
import EmployeeInfo from "./page/EmployeeInfo";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<AllEmployee/>}/>
                <Route path="/:employee" element={<EmployeeInfo/>}/>
            </Routes>
        </div>
    );
}

export default App;
