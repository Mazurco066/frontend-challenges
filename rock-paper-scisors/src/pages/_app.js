// Next dependencies
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'
import { ModalProvider } from 'styled-react-modal'
import { GameProvider } from 'providers'

// App styles
import GlobalStyles from 'styles/global'
import 'react-toastify/dist/ReactToastify.css'

// App Function
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rock, Paper and Scissors</title>
        <link rel="shortcut icon" href="/img/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/img/favicon-32x32.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#14173a" />
        <meta name="description" content="Rock, Paper and Scissors" />
      </Head>
      <NextNprogress color="#14173a" startPosition={0.3} stopDelayMs={200} height={3} />
      <GlobalStyles />
      <ModalProvider>
        <GameProvider>
          <Component {...pageProps} />
        </GameProvider>
      </ModalProvider>
      <ToastContainer position="bottom-right"/>
    </>
  )
}

// Prop Types
App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}