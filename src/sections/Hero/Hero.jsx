import './Hero.scss';
import { personal } from '../../data/personal';
import { Button } from '../../components/Button/Button';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import heroImg from '../../assets/saif Naguib.jpg';

const CODE_LINES = [
  { num: 1, content: <><span className="hero__code-keyword">export default</span> {'{'}</> },
  { num: 2, content: <>  name: <span className="hero__code-string">"{personal.name}"</span>,</> },
  { num: 3, content: <>  role: <span className="hero__code-amber">"{personal.title}"</span>,</> },
  { num: 4, content: <>  focus: <span className="hero__code-string">"{personal.about}"</span>,</> },
  { num: 5, content: <>  based: <span className="hero__code-string">"{personal.location}"</span>,</> },
  { num: 6, content: <>{"};"}</> },
];

export const Hero = () => {
  const reducedMotion = useReducedMotion();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeIn = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      };

  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <motion.div className="hero__editor" {...fadeIn}>
          <div className="hero__editor-titlebar">
            <div className="hero__traffic-lights" aria-hidden="true">
              <span className="hero__dot hero__dot--red" />
              <span className="hero__dot hero__dot--yellow" />
              <span className="hero__dot hero__dot--green" />
            </div>
            <span className="hero__tab">about-me.js</span>
          </div>

          <div className="hero__editor-body">
            <div className="hero__line-numbers" aria-hidden="true">
              {CODE_LINES.map((line) => (
                <span key={line.num}>{line.num}</span>
              ))}
            </div>
            <pre className="hero__code">
              <code>
                {CODE_LINES.map((line) => (
                  <div key={line.num} className="hero__code-line">
                    {line.content}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </motion.div>

        <div className="hero__bottom">
          <motion.div
            className="hero__intro"
            {...(reducedMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: 0.15 },
                })}
          >
            <p className="hero__greeting">Hello, I&apos;m</p>
            <h1 className="hero__name">{personal.name}</h1>
            <p className="hero__role">{personal.title}</p>
            <p className="hero__description">{personal.about}</p>
            <div className="hero__buttons">
              <Button onClick={() => scrollTo('contact')}>Get In Touch</Button>
              <Button variant="outline" onClick={() => scrollTo('projects')}>
                View Projects
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="hero__photo"
            {...(reducedMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: 0.25 },
                })}
          >
            <img src={heroImg} alt={personal.name} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
