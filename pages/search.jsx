/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react'
import BookCard from '../components/BookCard'
import GridLoader from "react-spinners/GridLoader";
import Head from "next/head"
function Search() {
  const [query, setQuery] = useState("")
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  const changeHandler = (e) => {
    setQuery(e.target.value)
  }
  const submitHandler = (e) =>{
    e.preventDefault()
    setLoading(true)
    const getData =  async () =>{
      await fetch(`${process.env.NEXT_PUBLIC_QUERY}${query}`)
      .then(response => response.json())
      .then(data => setBooks(data))
      setLoading(false)
    }
    getData()
    
  }

  
  return (
    
    <><div className="search__container">
      <Head>
        <title>Bookscador - Find any book in the world</title>
      </Head>
      <p>You can start searching any book by typing its title. It's just that simple.</p>
      <form className="form__container">
        <input type="search" placeholder="Type book name..." onChange={changeHandler} />
        <button type="submit" onClick={submitHandler}>
          Search
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
          </svg>
        </button>
      </form>
    </div>
    <div className='search__results__container'>
    <div className='search__results'>
        {loading ?
          <div className='grid__loader'><GridLoader /> </div>:
          books.items?.map(book => (
            <div key={book.id} className='book__card'>
              <BookCard book={book} />
            </div>
          )) 
          }
    </div>
    </div>
      </>
  )
}

export default Search
