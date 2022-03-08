import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home, Catalog, Error,Cart,LookBook, Product, LoginPage, RegisterPage, Recover  } from './pages';
import {Routes, Route} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-gallery/styles/css/image-gallery.css";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog/:subcategory" element={<Catalog />} />
        <Route path="/lookbook" element={<LookBook />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<Error />} />
        app
      </Routes>
    </div>
  );
}

export default App;
