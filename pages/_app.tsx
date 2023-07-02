
import './globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { DataProvider, dataContext } from '../context/dataContext';
import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import useLocalStorage from '../hooks/useLocalStorage';
import Modal from '../components/Modal';
import { useContext, useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <DataProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </ChakraProvider> 
  )
}