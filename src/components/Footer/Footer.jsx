import './Footer.scss';
import { personal } from '../../data/personal';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>© 2024 {personal.name}. All rights reserved.</p>
        <div className="footer__links">
          <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
