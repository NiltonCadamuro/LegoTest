import Article from "./Article";
import { SeactionProps } from "./types";

import './styles.scss';

const Section = ({ name, nameText, id, color, article, inverted }: SeactionProps) => {
  return (
    <section id={id} className="section-home">
      <div className="section-header">
        <h2>{name}</h2>
        <p>{nameText}</p>
      </div>
      <div className="article-container" style={{ borderColor: color }}>
        {article.map((article, index) => (
          <Article key={index} {...article} inverted={inverted} />
        ))}
      </div>
    </section>
  )
}

export default Section;