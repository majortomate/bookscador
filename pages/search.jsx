/* eslint-disable react/no-unescaped-entities */
function Search() {
  return (
    <div className="search__container">
      <p>You can start searching any book by typing its title or even the author. It's just that simple.</p>
      <form className="form__container">
        <input type="search" placeholder="Type book name or author..."/>
        <button type="submit">
          Search
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="10" cy="10" r="7"></circle>
          <line x1="21" y1="21" x2="15" y2="15"></line>
        </svg>
        </button>
      </form>
    </div>
  )
}

export default Search
