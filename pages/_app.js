import '../styles/globals.css'
import Footer from './Components/footer'
import NavBar from './Components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
