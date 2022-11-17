import Link from "next/link"

function Header () {
  return (
    <div className="header">
      <header className="header__container">
        <Link href='/'>
          <h1>Bookscador</h1>
        </Link>
        <ul className="nav__container">
          <li>
            <a href="https://www.linkedin.com/in/majortomate/" target='_blank' rel='noreferrer'>Meet the Author</a>
          </li>
          <li>
            <a href="https://github.com/majortomate/bookscador" target='_blank' rel='noreferrer'>Check the Code</a>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
