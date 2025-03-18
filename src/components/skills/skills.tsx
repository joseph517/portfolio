import { motion } from "framer-motion";
import "./skills.css";
import Card from "./card";

function skills() {
  const skills = [
    {
      id: 1,
      title: "Frontend Development",
      skills: [
        "HTML/CSS/SASS",
        "JavaScript",
        "TypeScript",
        "React",
        "Angular",
        "Bootstrap",
        "Angular Design",
      ],
    },
    {
      id: 2,
      title: "Backend Development",
      skills: ["Python", "Django", "REST framework", "RESTful APIs", "Odoo"],
    },
    {
      id: 3,
      title: "Database Management",
      skills: ["MySQL", "PostgreSQL", "SQLite"],
    },
    {
      id: 4,
      title: "DevOps & tools",
      skills: ["Git", "Docker", "CI/CD", "Linux"],
    },
    {
      id: 5,
      title: "Design",
      skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"],
    },
  ];

  return (
    <section id="skills" className="skills-container">
      <div className="skills-content">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="section-title mb-48">
            <h2
              className="
                section-title fs-36 mb-8 geist-font-bold"
            >
              My skills
            </h2>
            <div className="title-line mb-16"></div>
            <p className="fs-16 geist-font-medium">
              I've worked with a variety of technologies in the web development
              world. Here are my main areas of expertise:{" "}
            </p>
          </div>
        </motion.div>
          <div className="skill-section pd-24">
            {skills.map((skill, index) => (
              <motion.div
                className="skill-section-content pd-16"
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ amount: 0.1, once: true }}
              >
                <Card {...skill} />
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
}

export default skills;


