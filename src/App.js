import React, { useEffect } from 'react';
import './style/style.css'

function submitForm() {
    const query = document.getElementById('searchQuery').value.trim().toLowerCase();
    let newTabUrl = '';

    if (query.startsWith('http://') || query.startsWith('https://')) {
        window.open(query, '_blank');
    } 
    else if (query.includes('hatmic')) {
        newTabUrl = query.includes('github') ? 'https://github.com/hatmic' : 'https://pro.hatmic.com';
        window.open(newTabUrl, '_blank');
    }
    else if (query.includes('coppist')) {
        newTabUrl = query.includes('github') ? 'https://github.com/coppist' : 'https://co.hatmic.com';
        window.open(newTabUrl, '_blank');
    }
    else if (query.includes('tolazyer')) {
        newTabUrl = query.includes('gitee') ? 'https://gitee.com/tolazyer' : 'https://tolazyer.gitee.io/artwaves';
        window.open(newTabUrl, '_blank');
    }
    else if (query.includes('nomen') || query.includes('helloyork')) {
        newTabUrl = query.includes('github') ? 'https://github.com/helloyork' : 'https://nomen.blog';
        window.open(newTabUrl, '_blank');
    } 
    else if (query.includes('zybqw') || query.includes('猫鱼a')) {
        newTabUrl = query.includes('github') ? 'https://github.com/zybqw' : 'https://zybqw.github.io';
        window.open(newTabUrl, '_blank');
    }
    else if (query.includes('ori-web')) {
        newTabUrl = query.includes('github') ? 'https://github.com/ori-web' : 'https://ori-web.github.io/';
        window.open(newTabUrl, '_blank');
    }
    else if (query.includes('t-mkt')) {
        newTabUrl = 'https://github.com/t-mkt';
        window.open(newTabUrl, '_blank');
    }
    else if (query.includes('checng')) {
        newTabUrl = 'https://github.com/checng';
        window.open(newTabUrl, '_blank');
    }
    else if (query !== '') {
        const encodedQuery = encodeURIComponent(query);
        const searchUrl = 'https://www.bing.com/search?q=' + encodedQuery;
        window.open(searchUrl, '_blank');
    }
    return false;
}

function App() {

  const handleSubmit = (event) => {
      event.preventDefault();
      submitForm();
  };

  return (
      <>
          <div>
              <div id="search" className="divBox">
                  <form id="searchForm" onSubmit={handleSubmit}>
                      <input type="text" id="searchQuery" placeholder="What do you want to search?" />
                      <button type="submit">
                          <svg width="16" height="16">
                              <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                          </svg>
                      </button>
                  </form>
              </div>

              <div id="nav" className="divBox">
                  <h5>
                      <a href="https://github.com/hatmic">GitHub · Hatmic</a>
                      |
                      <a href="https://pro.hatmic.com">Hatmic · Projects</a>
                  </h5>
              </div>
          </div>
      </>
  );
}

export default App;