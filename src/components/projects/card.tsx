import { CardProjectsProps } from '../../interfaces/card.interface';
import { ExternalLink, Github } from 'lucide-react';

function Card(props: Readonly<CardProjectsProps>) {
  return (
    <div className="project-card pd-16">
      <div className="card-img-container">
        <img
          className="card-image-content"
          src={props.image}
          alt={props.title}
        />
        <div className="btn-container">
          <div className="btn-container-content">
            <button className="card-btn text-accent-foreground fs-14">
              <a
                className="card-btn-content"
                target="_blank"
                href={props.code}>
                <Github /> Code
              </a>
            </button>
            <button  className="card-btn text-secondary-foreground fs-14">
              <a
                className="card-btn-content"
                target="_blank"
                href={props.demo}>
                <ExternalLink /> Demo
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="content-container pd-24">
        <h3 className="fs-20 geist-font-bold text-primary mb-8">{props.title}</h3>
        <p className="fs-16 geist-font-medium text-card-foreground mb-16">{props.description}</p>
        <div className="tech-container">
          {props.tech.map(tech => (
            <span className="fs-14 geist-font-medium text-accent tech-item" key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
