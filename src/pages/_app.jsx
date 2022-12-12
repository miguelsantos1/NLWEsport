import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="description" content="Faça seu post e encontre seu DUO!" />
      <meta name="keywords" content="game, games, post, player" />
      <meta name="author" content="Miguel Santos" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;800;900&" />

      <title>NLWEsport</title>
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
