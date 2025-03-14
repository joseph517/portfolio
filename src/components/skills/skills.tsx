import { motion } from "framer-motion";
import "./skills.css";
import { div } from "framer-motion/client";

function skills() {
  const skills = [
    {
      id: 1,
      name: "Frontend Development",
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
      name: "Backend Development",
      skills: ["Python", "Django", "REST framework", "RESTful APIs", "Odoo"],
    },
    {
      id: 3,
      name: "Database Management",
      skills: ["MySQL", "PostgreSQL", "SQLite"],
    },
    {
      id: 4,
      name: "DevOps & tools",
      skills: ["Git", "Docker", "CI/CD", "Linux"],
    },
    {
      id: 5,
      name: "Design",
      skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"],
    },
  ];

  return (
    <div className="skills-container">
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
        <motion.div>
          <div className="skill-section pd-24">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-section-content pd-16">
                <h2 className="skill-section-title fs-20 geist-font-bold text-primary mb-20">
                  {skill.name}
                </h2>
                <div className="skill-list">
                  {skill.skills.map((skill) => (
                    <div key={skill} className="skill-item mb-8">
                      <div className="circle-skill"></div>
                      <span className="skill-name fs-16 geist-font-medium text-popover">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default skills;
