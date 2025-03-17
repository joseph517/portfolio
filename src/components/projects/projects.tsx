import { motion } from 'framer-motion'
import './projects.css'
import { ArrowRightIcon } from 'lucide-react'
import  Card from './card'
import PayUp from '../../assets/projects/PayUp-view.jpeg'
import { useState } from 'react'

function projects() {

    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: "Description 1",
            tech: ["React", "Node.js"],
            image: PayUp,
        },
        {
            id: 2,
            title: "Project 2",
            description: "Description 2",
            tech: ["React", "Node.js"],
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            title: "Project 3",
            description: "Description 3",
            tech: ["React", "Node.js"],
            image: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            title: "Project 4",
            description: "Description 4",
            tech: ["React", "Node.js"],
            image: "https://via.placeholder.com/150",
        },
        {
            id: 5,
            title: "Project 5",
            description: "Description 5",
            tech: ["React", "Node.js"],
            image: "https://via.placeholder.com/150",
        },
        {
            id: 6,
            title: "Project 6",
            description: "Description 6",
            tech: ["React", "Node.js"],
            image: "https://via.placeholder.com/150",
        },
    ]

    const [showAll, setShowAll] = useState(false)

    return (
        <>
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
                        <p className="card-description fs-16 geist-font-medium">Here are some of my recent projects. Each project reflects my passion for creating intuitive and impactful
                        digital experiences.</p>
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
                    <button className="card-view-all-btn fs-14 geist-font-medium" onClick={() => setShowAll(!showAll)}>
                       {showAll ? "Hide" : "View All Projects"} <ArrowRightIcon />
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}

export default projects