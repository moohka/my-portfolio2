import { useRef, useEffect } from "react";
// import Keep from "../../assets/screenshots/Screenshot_of_Google_Keep_Clone.png";
// import Olive from "../../assets/screenshots/Screenshot_of_Olive_Hair.png";

const Projects = () => {
  //projects
  let myProjects;

  return (
    <div className="sub" id="projects">
      <h2 className="project-sub-title">My Projects</h2>

      <div className="project-container">
        {myProjects.map((project) => {
          return (
            <div className="project-card" key={project.id}>
              <img
                className="project-thumbnail"
                src={project.img}
                alt={`screenshot of ${project.title}`}
              ></img>

              <div
                className="project-detail"
                onMouseLeave={() => {}}
                ref={project.ref}
              >
                <h2 className="project-h">{project.title}</h2>
                <p className="project-p">{project.detail}</p>
                <div className="project-with">
                  {project.builtWith.map((element) => (
                    <span className="built-with-item" key={element}>
                      {element}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
