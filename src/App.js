import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Project from './components/Project';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Project />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
