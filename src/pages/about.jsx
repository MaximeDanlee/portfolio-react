import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
							</div>
						</div>
					</div>

					<div className="professional-education">
					  <section className="education">
						<h2>Education</h2>
						<div className="degree">
						  <h3>Master in Computer Science</h3>
						  <p>UCLouvain | 2022 - 2024</p>
						  <p className="italic">During my master's program, I focused on advanced topics in software development, including algorithms, artificial intelligence, and cloud computing. I also worked on several collaborative projects that enhanced my problem-solving and teamwork skills.</p>
						</div>
						<div className="degree">
						  <h3>Bachelor in Information Technology</h3>
						  <p>Ephec | 2019 - 2022</p>
						  <p className="italic">At Ephec, I developed a strong foundation in programming, databases, and web development. I completed multiple projects that honed my skills in JS, Python, and web technologies. This period also helped me understand the practical aspects of software engineering.</p>
						</div>
					  </section>

					  <section className="professional-experience">
						<h2>Professional Experience</h2>
						<div className="job">
						  <h3>Web Developer</h3>
						  <p>MediaWind, Nivelles | September 2024 - Present</p>
						  <p className="italic">Responsibilities: Implemented features using React, improved performance, fixed bugs, and contributed to backend improvements with PHP.</p>
						</div>
						<div className="job">
						  <h3>Intern Developer</h3>
						  <p>Softron, Brussels | Feb 2022 - May 2022</p>
						  <p className="italic">Project: Developed an iPad application to control an instant replay system.</p>
						</div>
						<div className="job">
						  <h3>Receptionist</h3>
						  <p>Centre sportif des Coquerées, Ottignies-LLN | July 2021 - January 2023</p>
						  <p className="italic">Responsibilities: Managed reservations, greeted customers, and maintained cleanliness.</p>
						</div>
					  </section>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
