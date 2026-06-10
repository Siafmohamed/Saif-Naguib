import './Projects.scss';
import { projects } from '../../data/projects';
import { Card } from '../../components/Card/Card';
import { Tag } from '../../components/Tag/Tag';
import { Button } from '../../components/Button/Button';
import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <motion.h2 
          className="projects__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="projects__card">
                <div className="projects__card-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="projects__card-content">
                  <span className="projects__card-type">{project.type}</span>
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-description">{project.description}</p>
                  <div className="projects__card-tags">
                    {project.tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </div>
                  <Button href={project.demo} className="projects__card-button">
                    View Project
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
