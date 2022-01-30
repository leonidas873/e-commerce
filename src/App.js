import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home } from './pages';
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<Home/>}/>
          app
        </Routes>
    </div>
  );
}

export default App;
