import './Projects.scss';
import { projects } from '../../data/projects';
import { Card } from '../../components/Card/Card';
import { Chip } from '../../components/Chip/Chip';
import { Button } from '../../components/Button/Button';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const ProjectCard = ({ project, featured = false, reducedMotion, delay = 0 }) => {
  const motionProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay },
      };

  return (
    <motion.div {...motionProps}>
      <Card className={`projects__card ${featured ? 'projects__card--featured' : ''}`}>
        <div className={`projects__card-image ${featured ? 'projects__card-image--featured' : ''}`}>
          {featured && (
            <div className="projects__browser-bar" aria-hidden="true">
              <span className="projects__browser-dot projects__browser-dot--red" />
              <span className="projects__browser-dot projects__browser-dot--yellow" />
              <span className="projects__browser-dot projects__browser-dot--green" />
              <span className="projects__browser-url">voyage.app</span>
            </div>
          )}
          <div className="projects__card-image-frame">
            <img src={project.image} alt={project.title} loading={featured ? 'eager' : 'lazy'} />
          </div>
        </div>
        <div className="projects__card-content">
          <div className="projects__card-labels">
            {featured && <span className="projects__featured-badge">Featured</span>}
            <span className="projects__card-type">{project.type}</span>
          </div>
          <h3 className="projects__card-title">{project.title}</h3>
          <p className="projects__card-description">{project.description}</p>
          <div className="projects__card-tags">
            {project.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
          <Button href={project.demo} className="projects__card-button">
            View Project
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export const Projects = () => {
  const reducedMotion = useReducedMotion();
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <SectionHeader index="02" label="Projects" title="Projects" />

        <div className="projects__featured">
          <ProjectCard project={featured} featured reducedMotion={reducedMotion} />
        </div>

        <div className="projects__row">
          {rest.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reducedMotion={reducedMotion}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
