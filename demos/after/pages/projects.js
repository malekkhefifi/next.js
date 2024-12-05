// components/Projects.js
import Footer from "./Footer";
import Navbar from "./navbar"; // Importing Navbar component
import styles from './Projects.module.css'; // Import the CSS module

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description for project 1. This project is focused on building a user-friendly web application using modern technologies.',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description for project 2. This project highlights the use of API integration and dynamic content rendering.',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description for project 3. An exciting project focusing on responsive design and cross-platform compatibility.',
    },
  ];

  return (
    <div className={styles.projectsContainer}>
      <Navbar />
      <h1 className={styles.projectsTitle}>My Projects</h1>

      <div className={styles.projectsList}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Projects;


