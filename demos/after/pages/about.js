import Footer from "./Footer";
import Navbar from "./navbar";
export default function About() {
  return (
    //<div className={styles.container}>
    <div>
      <Navbar/>
      <h1>À propos de moi</h1>
      <p>Je suis un développeur passionné par la création d'applications web modernes. 
          Mon expertise inclut le développement full-stack, avec une maîtrise des technologies 
          comme React, Node.js, et le développement d'API RESTful. 
          J'aime relever des défis techniques tout en créant des solutions intuitives et performantes.</p>
      <Footer/>
    </div>
  );
}