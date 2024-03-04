import { ArticleProps } from "../types"

const Article = ({ title, description, image, link, inverted }: ArticleProps) => {
  return (
    <article className={`${inverted ? "article-content-inverted" : ""} article-content`}>
      <div className="article-image">
        <img src={image} alt={title} />
      </div>
      <div className="article-text">
        <h3 className="article-title">{title}</h3>
        <p className="article-description">{description}</p>
        <div className="container-article-link">
          <a href={link} className="article-link">
            <span>View details</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow">
              <path d="M5 12L19 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 19L19 12L12 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}

export default Article;