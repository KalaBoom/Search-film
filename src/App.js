import React from 'react'
import Search from './Film/Search'
import Pages from './Film/Pages'
import Show   from './Film/Show'

function App() {
  const [films, setFilms] = React.useState([])
  const [pages, setPages] = React.useState({})
  const [error, setError] = React.useState({})

  function sendData(title, page=1) {
    fetch(`https://www.omdbapi.com/?s=${title}&page=${page.toString()}&apikey=c9197d74`)
        .then(response => {
          return response.json()
        })
        .then(json => {
          setError({
          Response: json.Response,
          Error: json.Error
        })
          setFilms(json.Search)
          setPages({
            results: json.totalResults,
            title: title,
            number: page
          })
        })
  }

  return (
    <div>
      <Search onSendData={sendData} countPages={pages}/>
      {error.Response === "False" &&  <h1 style={{marginLeft: '1em'}} > {error.Error}</h1>}     
      {pages.results && <Pages count={pages.results} title={pages.title} number={pages.number} onSendData={sendData}/>}
      {films && <Show films={films} />}
      
    </div>
  )
}

export default App;
