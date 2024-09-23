import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{Object.keys(INFO.projects).map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={INFO.projects[project].logo}
						title={INFO.projects[project].title}
						description={INFO.projects[project].description}
						linkText={INFO.projects[project].linkText}
						link={INFO.projects[project].link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
