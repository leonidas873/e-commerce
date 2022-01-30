import './App.css';
import { Home } from './pages';
import { Routes, Route } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        app
      </Routes>
    </div>
  );
}

export default App;
