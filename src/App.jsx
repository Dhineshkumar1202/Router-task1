import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { FullStackDevelopment } from './components/Pages/FullStackDevelopment';
import { DataScience } from './components/Pages/DataScience';
import { CyberSecurity } from './components/Pages/CyberSecurity';
import { Career } from './components/Pages/Career';
import { All } from './components/Pages/All';
import { Card } from 'react-bootstrap';

function App() {
  return <div className='App'>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<All/>}/>
      <Route path='/Full-Stack-Development' element={<FullStackDevelopment/>}/>
      <Route path='/Data-Science'element={<DataScience/>} />
      <Route path='/Cyber-Security'element={<CyberSecurity/>} />
      <Route path='/Career'element={<Career/>}/>
</Routes>
    </div>; 
}

export default App;