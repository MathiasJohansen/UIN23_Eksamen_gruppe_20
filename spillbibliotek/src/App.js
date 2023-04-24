
import './App.css';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import GameshopPage from './pages/GameshopPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/gameshop" element={<GameshopPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
