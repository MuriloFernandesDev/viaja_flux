import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Theme } from 'react-daisyui'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <Theme dataTheme="light">
         <Component {...pageProps} />
      </Theme>
   )
}

export default MyApp
