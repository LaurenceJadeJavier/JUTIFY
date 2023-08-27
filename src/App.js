import logo from './logo.svg';
import './App.css';
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
