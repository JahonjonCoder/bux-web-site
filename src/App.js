import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'
import Navbar1 from './components/Navbar/Navbar1';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/footer';
import MurojaatYuborish from './components/Pages/MurojaatYuborish';
import Faoliyat__yangiliklar from './components/Pages/Faoliyat__yangiliklar';

function App() {
  return (
   <>
      <Navbar1 />
      <Navbar />
      <Home />
      <Footer />
      <MurojaatYuborish />
      <Faoliyat__yangiliklar />
   </>
  );
}

export default App;
