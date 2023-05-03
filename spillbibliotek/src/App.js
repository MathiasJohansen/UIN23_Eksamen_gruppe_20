
import './App.css';
import './css/main.css'
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import GameshopPage from './pages/GameshopPage';
import Mygames from './components/Mygames';
import Myfavourites from './components/Myfavourites';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/gameshop" element={<GameshopPage />} />
        <Route path="/mygames" element={<Mygames />} />
        <Route path="/myfavourites" element={<Myfavourites />} />
      </Routes>
    </Layout>
  );
}

export default App;
