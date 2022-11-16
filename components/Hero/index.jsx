/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import Image from "next/image"
function Hero() {
  return (
    <div className="hero__container">
      <div className="gif__container">
        <Image src="https://res.cloudinary.com/knowhere/image/upload/v1667690640/Bookscador/static/books-gif-unscreen_xvsiyu.gif" alt="books gif"  width='300' height='300' />
      </div>
      <div className="content__container">
        <h3>It's never been so easy</h3>
        <h2>Bookscador</h2>
        <p>Search for any book by simply typing its title or author, read all its info and also buy it. 😎</p>
      </div>
      <div className="search__button">
        <Link href='/search'>
          <button>
            Start Searching
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <line x1="13" y1="18" x2="19" y2="12"></line>
            <line x1="13" y1="6" x2="19" y2="12"></line>
          </svg>
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
