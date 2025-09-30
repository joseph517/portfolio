import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { CardProjectsProps } from '../../interfaces/card.interface';
import { ExternalLink, Github } from 'lucide-react';

function Card(props: Readonly<CardProjectsProps>) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="project-card pd-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="card-img-container">
        <motion.img
          className="card-image-content"
          src={props.image}
          alt={props.title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="btn-container"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="btn-container-content">
            <motion.button
              className="card-btn text-accent-foreground fs-14"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                className="card-btn-content"
                target="_blank"
                href={props.code}
                rel="noreferrer"
              >
                <Github /> Code
              </a>
            </motion.button>
            <motion.button
              className="card-btn text-secondary-foreground fs-14"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                className="card-btn-content"
                target="_blank"
                href={props.demo}
                rel="noreferrer"
              >
                <ExternalLink /> Demo
              </a>
            </motion.button>
          </div>
        </motion.div>
      </div>
      <div className="content-container pd-24">
        <motion.h3
          className="fs-20 geist-font-bold text-primary mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {props.title}
        </motion.h3>
        <motion.p
          className="fs-16 geist-font-medium text-card-foreground mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {props.description}
        </motion.p>
        <motion.div
          className="tech-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {props.tech.map((tech, index) => (
            <motion.span
              className="fs-14 geist-font-medium text-accent tech-item"
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Card;
