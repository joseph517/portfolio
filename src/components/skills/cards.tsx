import "./skills.css";
import { CardsProps } from "../../interfaces/card.interface";

function Cards({ title, skills }: CardsProps) {
  
    return (
      <>
        <h2 className="skill-section-title fs-20 geist-font-bold text-primary mb-20">
          {title}
        </h2>
        <div className="skill-list">
          {skills.map((skill) => (            
            <div key={skill} className="skill-item mb-8">
              <div className="circle-skill"></div>
              <span className="skill-name fs-16 geist-font-medium text-popover">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </>
    );
  }
  
  export default Cards;