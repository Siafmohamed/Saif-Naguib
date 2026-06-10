import './Hero.scss';
import { personal } from '../../data/personal';
import { Button } from '../../components/Button/Button';
import { motion } from 'framer-motion';
import heroImg from '../../assets/saif Naguib.jpg';

export const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <motion.div 
          className="hero__content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">{personal.name}</h1>
          <h2 className="hero__title">{personal.title}</h2>
          <p className="hero__description">{personal.about}</p>
          <div className="hero__buttons">
            <Button href={`mailto:${personal.email}`}>Contact Me</Button>
            <Button variant="outline" href={personal.github} target="_blank">GitHub</Button>
          </div>
        </motion.div>
        <motion.div 
          className="hero__image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={heroImg} alt={personal.name} />
        </motion.div>
      </div>
    </section>
  );
};
