import './Experience.scss';
import { experience } from '../../data/experience';
import { motion } from 'framer-motion';

export const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <motion.h2 
          className="experience__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="experience__timeline">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              className="experience__item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="experience__item-header">
                <div>
                  <h3 className="experience__role">{item.role}</h3>
                  <p className="experience__org">{item.org}</p>
                </div>
                <span className="experience__period">{item.period}</span>
              </div>
              <ul className="experience__points">
                {item.points.map((point, i) => (
                  <li key={i} className="experience__point">{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
