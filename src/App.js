import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';
import Footer from './components/footer/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Qna from './components/qna/Qna';

function App() {

  const [qna, setQna] = useState([])

  useEffect(() => {
    fetch('qna.json')
      .then(res => res.json())
      .then(data => setQna(data))
  }, [])



  return (
    <div className='app'>
      <div className="container">
        <Header />
        <Shop />
        <hr />
        <Qna qna={qna} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
