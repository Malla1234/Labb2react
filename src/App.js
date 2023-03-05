import logo from './logo.svg';
import './App.css';
import React from 'react';
import projects from './projects';
import ProjectList from './ProjectList';
import { NavbarComponent } from "./NavBar.js";
import { HomeComponent } from "./Home.js";
import { CvComponent } from "./Cv.js";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
      <Router>
      <NavbarComponent/>
        <Routes>
          <Route path="/" element={<HomeComponent/>} />
          <Route path="/cv" element={<CvComponent/>} />
        </Routes>
    </Router>
    )

}

export default App;
