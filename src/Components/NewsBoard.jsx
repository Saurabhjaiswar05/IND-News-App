import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=459d573dccaa4d5b99034fed92c004ff`
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
    },[category])
  return (
    <div style={{paddingLeft:"110px", backgroundColor:"black",paddingTop:"45px"}}>
      <h2 className='text-center pt-5 ' style={{color:"white"}}>Latest <span className='badge bg-danger'>News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard
