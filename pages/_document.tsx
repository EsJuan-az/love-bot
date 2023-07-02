import { Html, Head, Main, NextScript } from 'next/document'
import { useContext } from 'react'
import { dataContext } from '../context/dataContext'
 
export default function Document() {

  return (
    <Html>
      <Head>
        
      </Head>
      <body>
        <div className={`modal  w-full h-screen fixed top-0 bg-violet-500/50`}></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}