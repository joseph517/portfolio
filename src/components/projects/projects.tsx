import { useState } from 'react'
import { motion } from 'framer-motion'
import './projects.css'
import { ArrowRightIcon } from 'lucide-react'
import  Card from './card'
import PayUp from '../../assets/projects/PayUp-view.jpeg'
import quimiLearn from '../../assets/projects/quimiLearn.png'
import biller from '../../assets/projects/biller.png'
import countryApp from '../../assets/projects/countryApp.png'
import todo from '../../assets/projects/todo.png'

function Projects() {

    const projects = [
        {
            id: 2,
            title: "QuimiLearn",
            description: "Pagina dinamica de aprendizaje de quimica",
            tech: ["HTML", "CSS", "JavaScript", "Git"],
            image: quimiLearn,
            demo: "https://quimi-learn.vercel.app/",
            code: "https://github.com/joseph517/quimiLearn"
        },
        {
            id: 3,
            title: "Biller",
            description: " Aplicacion consiste en un facturador en angular, cuenta con dos paginas (Crear - Listar). Se calcula el valor del iva en tiempo real, se calcula un total sin iva, con iva, del iva, las facturas creadas se almacenan en el localstorage, se valida que el formulario sea valido, se permite el filtrado por nombre e identificacion. ",
            tech: ["Html", "Css", "Bootstrap", "TypeScript", "Angular", "Git"],
            image: biller,
            demo: "https://biller-flame.vercel.app/",
            code: "https://github.com/joseph517/biller"
        },
        {
            id: 1,
            title: "PayUp view",
            description: "Se implementó un diseño previamente establecido, asegurando que fuera completamente responsivo para adaptarse a diferentes dispositivos.",
            tech: ["HTML", "CSS", "Sass", "TypeScript", "Angular", "Git"],
            image: PayUp,
            demo: "https://maqueta-pi.vercel.app/",
            code: "https://github.com/joseph517/loginPayUp"
        },
        {
            id: 4,
            title: "Todo",
            description: "Aplicación que permite la creación de tareas, asignación de personas y habilidades mediante formularios reactivos y anidados. Se implementan validaciones para asegurar que los campos estén completos y que no se repitan nombres en una misma tarea. Además, es posible eliminar personas y habilidades de las tareas. Posteriormente, las tareas se pueden listar y filtrar por su estado: todas, pendientes o completadas.",
            tech: ["Html", "Css", "Bootstrap", "TypeScript", "Angular", "Git"],
            image: todo,
            demo: "https://todo-two-smoky-15.vercel.app/create-task",
            code: "https://github.com/joseph517/todo"
        },
        {
            id: 5,
            title: "Country App",
            description: " Proyecto que permite consumir una api de https://restcountries.com/ para consular, listar y ver detalles de paises, ya sea por nombre, nombre de capital y region.",
            tech: ["React", "Node.js"],
            image: countryApp,
            demo: "https://country-app-pi-seven.vercel.app/countries/by-country",
            code: "https://github.com/joseph517/countryApp"
        },
        // {
        //     id: 6,
        //     title: "Project 6",
        //     description: "Description 6",
        //     tech: ["React", "Node.js"],
        //     image: "https://via.placeholder.com/150",
        //     demo: "",
        //     code: ""
        // },
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

export default Projects