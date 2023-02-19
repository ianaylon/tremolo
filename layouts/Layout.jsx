import React from 'react';
import Head from 'next/head';

import { Navbar, Footer } from '../components';

const Layout = ( { children } ) => {
  return (
    <div className='layout'>
      <Head>
        <title>Tremolo Ensemble</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer className='footer'>
        <div className='page-padding'>
           <div className='container'>
              <Footer />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout