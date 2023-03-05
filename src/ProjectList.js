import React, { useState, useEffect } from "react";

function ProjectList(props) {
  const [loading, setLoading] = useState(true);
  const projects = props.projects;

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Mina projekt</h2>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <a href={project.url}>{project.name}</a>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProjectList;

