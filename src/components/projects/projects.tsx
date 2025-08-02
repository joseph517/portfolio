import { useState } from "react";
import { motion } from "framer-motion";
import "./projects.css";
import { ArrowRightIcon } from "lucide-react";
import Card from "./card";
import PayUp from "../../assets/projects/PayUp-view.jpeg";
import quimiLearn from "../../assets/projects/quimiLearn.png";
import biller from "../../assets/projects/biller.png";
import countryApp from "../../assets/projects/countryApp.png";
import todo from "../../assets/projects/todo.png";
import lendWise from "../../assets/projects/lendWise.png";

function Projects() {
  const projects = [
    {
      id: 6,
      title: "lendWise",
      description:
        "loan application platform, which approves or rejects loan applications.",
      tech: ["Angular", "TypeScript", "Git", "Bootstrap", "Angular Material"],
      image: lendWise,
      demo: "https://lend-wise.vercel.app/loan",
      code: "https://github.com/joseph517/lendWise",
    },
    {
      id: 2,
      title: "QuimiLearn",
      description: "Dynamic Chemistry Learning Page",
      tech: ["HTML", "CSS", "JavaScript", "Git"],
      image: quimiLearn,
      demo: "https://quimi-learn.vercel.app/",
      code: "https://github.com/joseph517/quimiLearn",
    },
    {
      id: 3,
      title: "Biller",
      description:
        "Application consists of a biller in angular, has two pages (Create - List). It calculates the value of vat in real time, it calculates a total without vat, with vat, vat, the invoices created are stored in the localstorage, it validates that the form is valid, it allows filtering by name and identification.",
      tech: ["Html", "Css", "Bootstrap", "TypeScript", "Angular", "Git"],
      image: biller,
      demo: "https://biller-flame.vercel.app/",
      code: "https://github.com/joseph517/biller",
    },
    {
      id: 1,
      title: "PayUp view",
      description:
        "Established design was implemented, ensuring that it was fully responsive to adapt to different devices.",
      tech: ["HTML", "CSS", "Sass", "TypeScript", "Angular", "Git"],
      image: PayUp,
      demo: "https://maqueta-pi.vercel.app/",
      code: "https://github.com/joseph517/loginPayUp",
    },
    {
      id: 4,
      title: "Todo",
      description:
        "Application that allows the creation of tasks, assignment of people and skills through reactive and nested forms. Validations are implemented to ensure that fields are complete and that names are not repeated in the same task. In addition, it is possible to remove people and skills from tasks. Subsequently, tasks can be listed and filtered by their status: all, pending or completed.",
      tech: ["Html", "Css", "Bootstrap", "TypeScript", "Angular", "Git"],
      image: todo,
      demo: "https://todo-two-smoky-15.vercel.app/create-task",
      code: "https://github.com/joseph517/todo",
    },
    {
      id: 5,
      title: "Country App",
      description:
        "Project that allows to consume an api of https://restcountries.com/ to consulate, list and view details of countries, either by name, capital name and region.",
      tech: [
        'Html',
        'Css',
        'Bootstrap',
        'TypeScript',
        'Angular',
        'Docker',
        'Git',
      ],
      image: countryApp,
      demo: "https://country-app-pi-seven.vercel.app/countries/by-country",
      code: "https://github.com/joseph517/countryApp",
    },
    // {
    //     id: 7,
    //     title: "Project 7",
    //     description: "Description 6",
    //     tech: ["React", "Node.js"],
    //     image: "https://via.placeholder.com/150",
    //     demo: "",
    //     code: ""
    // },
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="projects-container">
      <div className="projects-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="card-title-content mb-48"
        >
          <h2 className="card-title fs-30 mb-8 geist-font-bold">My Projects</h2>
          <div className="title-line mb-16"></div>
          <p className="card-description fs-16 geist-font-medium">
            Here are some of my recent projects. Each project reflects my
            passion for creating intuitive and impactful digital experiences.
          </p>
        </motion.div>
        <div className="project-card-container mb-48">
          {projects.slice(0, showAll ? undefined : 3).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card {...project} />
            </motion.div>
          ))}
        </div>
        <div>
          <button
            className="card-view-all-btn fs-14 geist-font-medium"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Hide" : "View All Projects"} <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
