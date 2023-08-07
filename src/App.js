
import React, {Fragment} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import ReserveTable from './pages/Reservation';

import Header from './components/Header';
import Footer from './components/Footer';
import NoPage from './pages/404';

import './app.scss';

function App() {
  return (
    <>
    <BrowserRouter>
      <Fragment>
        <Header/>
      </Fragment>
      <Routes>
          <Route path="/" element={ <Home />}/>
          <Route index element={<Home />} />
          <Route path="about" element={<NoPage />} />
          <Route path="menu" element={<NoPage />} />
          <Route path="reservation" element={<ReserveTable />} />
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
