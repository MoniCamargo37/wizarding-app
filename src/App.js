import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import HouseDetails from './pages/HouseDetails';

const App = () => {
  return (

    <div>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="*" element={<ErrorPage />} />
       <Route path= "/houses/:houseId" element={<HouseDetails />} />
        </Routes>
    </div>
  );
};

export default App;
