import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError('');
    setSummary('');

    const options = {
      method: 'GET',
      // url: 'http://localhost:5000/api',
      url: 'https://react-summarizer-8gzl.onrender.com/api',
      params: {
        url: url,
        length: '1'
      },
    };

    try {
      const response = await axios.request(options);
      setSummary(response.data);
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      e.preventDefault();
      fetchData();
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="container">
      <h1 className="title">Text Summarizer</h1>
      <div className="form">
        <input
          type="text"
          className="input"
          placeholder="Enter URL"
          value={url}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <button className="button" onClick={handleClick}>
          Get Summary
        </button>
      </div>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {summary && (
        <div className="summary">
          <h2 className="summary-title">Summary:</h2>
          <p className="summary-text">{summary}</p>
        </div>
      )}
    </div>
  );
}

export default App;
