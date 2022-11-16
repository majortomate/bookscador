import '../styles/globals.css'
import '../styles/header.scss'
import '../styles/hero.scss'
import '../styles/search.scss'
import '../styles/searchResults.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default MyApp
