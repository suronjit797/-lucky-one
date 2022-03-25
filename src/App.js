import Header from './components/header/Header';
import Shop from './components/shop/Shop';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='app container'>
      <Header />
      <Shop />
    </div>
  );
}

export default App;
