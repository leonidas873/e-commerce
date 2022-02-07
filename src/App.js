import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home, Catalog, Error,Cart,LookBook } from './pages';
import {Routes, Route} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalog/:subcategory" element={<Catalog/>}/>
            <Route path="/lookbook" element={<LookBook />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="*" element={<Error/>}/>
          app
        </Routes>
    </div>
  );
}

export default App;
