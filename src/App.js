import logo from './logo.svg';
import './App.css';
import { LoginPage } from './pages/LoginPage';
import { ProductPage } from './pages/ProductPage';
import { AddProductPage } from './pages/AddProductPage';

function App() {
  return (
    <div className="App">
      <LoginPage />
      <ProductPage />
      <AddProductPage />
    </div>
  );
}

export default App;
