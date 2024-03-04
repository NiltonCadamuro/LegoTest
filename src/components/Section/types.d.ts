export interface SeactionProps {
  name: string;
  nameText: string;
  id: string;
  color: string;
  article: ArticleProps[];
  inverted?: boolean;
}

export interface ArticleProps {
  title: string;
  description: string;
  image: string;
  link: string;
  inverted?: boolean;
}
