import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";


const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;
    fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error("Error fetching data:", error.message));
  }, [category]);
  return (
    <div
      style={{
        paddingLeft: "110px",
        backgroundColor: "black",
        paddingTop: "45px",
      }}
    >
      <h2 className="text-center pt-5 " style={{ color: "white" }}>
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
