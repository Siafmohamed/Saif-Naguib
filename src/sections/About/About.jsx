import './About.scss';
import { personal } from '../../data/personal';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <motion.h2 
          className="about__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="about__text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {personal.about} I'm passionate about creating beautiful, functional, and user-friendly web applications. With a strong foundation in React.js and modern frontend technologies, I strive to deliver high-quality code and exceptional user experiences.
        </motion.p>
        <motion.div 
          className="about__info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="about__info-item">
            <span className="about__info-label">Location</span>
            <span className="about__info-value">{personal.location}</span>
          </div>
          <div className="about__info-item">
            <span className="about__info-label">Email</span>
            <span className="about__info-value">{personal.email}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
