import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'tech-blog',
      description: 'Node/Express/Sequelize',
      link: "https://tech-blog-mvc-casen.herokuapp.com/",
      repo: "https://github.com/cluck135/Tech-Blog"
    },
    {
      name: 'booya-social-media',
      description: 'MVC/Express/Sequelize/Node/APIs',
      link: "https://booya-unh-coding-bootcamp.herokuapp.com/",
      repo: "https://github.com/tallen1985/UNH-Project-2"
    },
    {
      name: 'note-taker',
      description: 'Express/Node',
      link: "https://tranquil-woodland-59466.herokuapp.com/",
      repo: "https://github.com/cluck135/Express.js-Note-Taker"
    },
    {
      name: 'weather-dashboard',
      description: 'API/Node/CSS/HTML',
      link: "https://cluck135.github.io/Weather-Dashboard/",
      repo: "https://github.com/cluck135/Weather-Dashboard"
    }
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
