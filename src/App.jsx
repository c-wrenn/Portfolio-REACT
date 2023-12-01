// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { Outlet } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Footer from '../components/Footer'

function App(){
    return (
      <>
      {/* gets all the components that are needed for the page and puts in one compact app  */}
      <body className='min-vh-90'>
        <Navigation/>
        <main className="mx-4">
          <Outlet />
        </main>
      </body>
      <footer className='col-12 mt-5 d-flex justify-content-center'>
        <Footer />
      </footer>
      </>
    )
  }
  
  export default App;
