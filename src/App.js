import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Packages from './components/Packages';
import Upload from './components/Upload';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/packages' element={<Packages/>}/>
        <Route path='/upload' element={<Upload/>}/>
      </Routes>
    </Router>
  );
}

export default App;
