import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>PierreSmithInc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to our Website!" />
        <p className="description">
          Peter and Smith Collection &copy 2023.
        </p>
      </main>

      <Footer />
    </div>
  )
}
