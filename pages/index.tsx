import Head from 'next/head'

export default function App() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container mx-auto'>
        <h1 className='font-bold text-3xl'>my portfolio</h1>
      </main>
    </>
  )
}
