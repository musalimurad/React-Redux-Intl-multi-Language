import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AppRoutes from './config/AppRoutes';

function App() {
  return (
    <>
    <Router>
       <Header/>
       <AppRoutes/>
       <Footer/>
    </Router>
      
    </>
  );
}

export default App;
