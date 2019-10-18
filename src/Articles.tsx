import React, { FunctionComponent } from "react";

interface ArticlesProps {
  articles: Article[];
}

const Articles: FunctionComponent<ArticlesProps> = ({ articles }) => (
  <ul>
    {articles.map(article => (
      <li key={article.id}>{article.title}</li>
    ))}
  </ul>
);

export default Articles;
