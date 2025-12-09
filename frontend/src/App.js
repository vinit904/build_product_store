
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NavBar from './components/Navbar';


function App() {
  return (
    <box >
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
      </Routes>

    </box>
  );
}

export default App;
