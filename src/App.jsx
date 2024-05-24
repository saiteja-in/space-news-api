import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);

  return (
    <div className='App'>
      <div className='title'>
        <h1>Space News</h1>
      </div>
      <div className='newsContainer'>
        {newsData.map((val, key) => (
          <div key={key} className='newsItem'>
            <div className='imageContainer'>
              <img src={val.imageUrl} alt={val.title} />
            </div>
            <h3>{val.title}</h3>
            <p>{val.summary}</p>
            <h4>{val.publishedAt}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
