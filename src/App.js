import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import Colors from './components/Colors';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:num" element={<Number />} />
        <Route path="/:word" element={<Word /> } />
        <Route path="/:word/:color1/:color2" element={<Colors /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
