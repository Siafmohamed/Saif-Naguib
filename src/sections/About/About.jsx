import './About.scss';
import { personal } from '../../data/personal';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const META = [
  { label: 'Location', value: personal.location },
  { label: 'Email', value: personal.email },
  { label: 'Focus', value: personal.title },
  { label: 'Status', value: 'Open to work', accent: true },
];

export const About = () => {
  const reducedMotion = useReducedMotion();

  const motionProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
      };

  return (
    <section id="about" className="about">
      <div className="about__container">
        <SectionHeader index="01" label="About" title="About Me" />

        <div className="about__grid">
          <motion.p className="about__text" {...motionProps}>
            {personal.about} I&apos;m passionate about creating beautiful, functional, and
            user-friendly web applications. With a strong foundation in React.js and modern
            frontend technologies, I strive to deliver high-quality code and exceptional user
            experiences.
          </motion.p>

          <motion.aside
            className="about__meta"
            {...(reducedMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: 0.1 },
                })}
          >
            {META.map((item) => (
              <div key={item.label} className="about__meta-row">
                <span className="about__meta-label">{item.label}</span>
                <span className={`about__meta-value ${item.accent ? 'about__meta-value--accent' : ''}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
