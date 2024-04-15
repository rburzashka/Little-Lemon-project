
import React, {Fragment, useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import ReserveTable from './pages/Reservation';

import Header from './components/Header';
import Footer from './components/Footer';
import NoPage from './pages/404';

import './app.scss';

function App() {

  const [responsive, setResponsive] = useState(3);

    const onResize = (e) => {
        if (window.innerWidth < 440) {
            setResponsive((prev)=>1);
        } else if (window.innerWidth < 961) {
            setResponsive((prev)=>2);
        } else {
            setResponsive((prev)=>3);
        }
    }

    useEffect(() => {
        onResize();

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize)
        }
    
      }, []);

  return (
    <>
    <div id="skiptocontent"><a href="#main">skip to main content</a></div>
    <BrowserRouter>
      <Fragment>
        <Header responsive={responsive}/>
      </Fragment>
      <Routes>
          <Route path="/" element={ <Home responsive={responsive} />}/>
          <Route index element={<Home responsive={responsive} />} />
          <Route path="about" element={<NoPage />} />
          <Route path="menu" element={<NoPage />} />
          <Route path="reservation" element={<ReserveTable responsive={responsive}/>} />
          <Route path="login" element={<NoPage />} />
          <Route path="order-online" element={<NoPage />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      <Fragment>
        <Footer/>
      </Fragment>
    </BrowserRouter>

      
    </>
    
  );
}

export default App;
