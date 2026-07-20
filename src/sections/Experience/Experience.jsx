import './Experience.scss';
import { experience } from '../../data/experience';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Experience = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <SectionHeader index="03" label="Experience" title="Experience" />

        <div className="experience__timeline">
          {experience.map((item, index) => (
            <motion.article
              key={index}
              className="experience__item"
              {...(reducedMotion
                ? {}
                : {
                    initial: { opacity: 0, x: -16 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.45, delay: index * 0.08 },
                  })}
            >
              <div className="experience__header">
                <span className="experience__role">{item.role}</span>
                <span className="experience__separator">·</span>
                <span className="experience__org">{item.org}</span>
                <span className="experience__period">{item.period}</span>
              </div>
              <ul className="experience__points">
                {item.points.map((point, i) => (
                  <li key={i} className="experience__point">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
