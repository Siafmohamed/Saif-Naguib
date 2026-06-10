import './Contact.scss';
import { personal } from '../../data/personal';
import { Button } from '../../components/Button/Button';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <motion.div 
          className="contact__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="contact__title">Get In Touch</h2>
          <p className="contact__text">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="contact__links">
            <Button href={`mailto:${personal.email}`} size="lg">
              Email Me
            </Button>
            <div className="contact__social">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact__social-link">
                GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact__social-link">
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
