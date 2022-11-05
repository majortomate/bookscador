import Header from '../components/Header'
import Hero from '../components/Hero'
import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
      <title>Bookscador - Find any book in the world</title>
      </Head>
      <Header />
      <Hero />
    </div>
  )
}
