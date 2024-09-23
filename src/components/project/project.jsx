import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import NavBar from "../common/navBar";
import Logo from "../common/logo";
import Footer from "../common/footer";
import Projects from "../../data/projects";

const Project = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
	  console.log("bonsoir");
    // const projectData = Projects().find(proj => proj.id === id);
    // if (projectData) {
    //   setProject(projectData);
    // } else {
    //   navigate("/404");
    // }
  }, [id, navigate]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${project.title}`}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="page-content">
        <NavBar />
        <div className="content-wrapper">
          <div className="read-article-logo-container">
            <div className="read-article-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="read-article-container">
            <div className="read-article-back">
              <img
                src="../back-button.png"
                alt="back"
                className="read-article-back-button"
                onClick={() => navigate(-1)}
              />
            </div>

            <div className="read-article-wrapper">
              <div className="read-article-date-container">
                <div className="read-article-date">
                  {project.date}
                </div>
              </div>

              <div className="title read-article-title">
                {project.title}
              </div>


            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;