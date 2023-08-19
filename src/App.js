import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Contact from './pages/contact';
import { BrowserRouter, Link } from'react-router-dom';
import MyRouter from './router';
import ShortenLink from './components/shortenlink';
import MyComponent from './components/myComponent';
import { Route,Routes } from'react-router-dom';




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MyComponent />} />
      <Route path="/r/:code" element={<MyComponent />} />

    </Routes>
    
  );
}

export default App;
