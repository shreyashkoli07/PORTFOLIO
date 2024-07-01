import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Rout from './Components/Rout';
AOS.init();
function App() {
  return (
    
    <>
    <BrowserRouter>
     <Navbar/>
     <Rout/>
     <Footer/>
     </BrowserRouter>
     
    </>
  );
}

export default App;
