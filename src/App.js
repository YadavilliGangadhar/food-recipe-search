import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Search from './components/Search';
import Footer from './components/Footer';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  

  return (
    <div>
       
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    
    </div>
  );
}

export default App;
