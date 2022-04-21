import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Nav from './components/Nav';
import Project from './components/Project';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
