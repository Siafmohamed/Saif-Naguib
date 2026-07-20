import './Skills.scss';
import { skillCategories } from '../../data/skills';
import { Chip } from '../../components/Chip/Chip';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Skills = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <SectionHeader index="04" label="Skills" title="Skills" />

        <div className="skills__panels">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.label}
              className="skills__panel"
              {...(reducedMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 16 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.45, delay: index * 0.08 },
                  })}
            >
              <h3 className="skills__category">{category.label}</h3>
              <div className="skills__chips">
                {category.skills.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
