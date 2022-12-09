import logo from './logo.svg';
import './App.css';
import { LoginPage } from './pages/LoginPage';
import { ProductPage } from './pages/ProductPage';
import { AddProductPage } from './pages/AddProductPage';
import { useState } from 'react';

function App() {

  const [page,setPage] = useState('login');

  return (
    <div className="App">
      { page == 'login' ?(<LoginPage func={setPage}/>):page =='products'?(<ProductPage func={setPage}/>):page=='addProduct'?(<AddProductPage func={setPage}/>) :''}
    </div>
  );
}

export default App;
