
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './components/pages/Overview';
import Footer from './components/Footer';


function App() {
  return (
     <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Overview/>} />
          </Routes>
          <Footer />
     </Router> 
  

  );
}

export default App;
