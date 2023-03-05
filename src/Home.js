import React from "react"
import projects from './projects';
import ProjectList from './ProjectList';
import { Container } from "react-bootstrap"

export const HomeComponent = () => {
    return (
        <div className="App">
          <ProjectList projects={projects} />
        </div>
      );
}