import { motion } from 'framer-motion';
import './skills.css';
import { CardSkillsProps } from '../../interfaces/card.interface';

function Card({ title, skills }: CardSkillsProps) {
  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };

  return (
    <>
      <motion.h2
        className="skill-section-title fs-20 geist-font-bold text-primary mb-20"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="skill-item mb-8"
            custom={index}
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ x: 8, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="circle-skill"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            />
            <span className="skill-name fs-16 geist-font-medium text-popover">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Card;