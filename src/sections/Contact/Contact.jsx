import './Contact.scss';
import { personal } from '../../data/personal';
import { Button } from '../../components/Button/Button';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Contact = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <motion.div
          className="contact__panel"
          {...(reducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5 },
              })}
        >
          <SectionHeader index="05" label="Contact" title="Get In Touch" />
          <p className="contact__text">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to
            be part of your vision.
          </p>
          <div className="contact__actions">
            <Button href={`mailto:${personal.email}`} size="lg">
              Email me
            </Button>
            <div className="contact__links">
              <a href={personal.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
