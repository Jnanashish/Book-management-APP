import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Header from './components/Header/Header';
// import BookCarousel from './components/BookCarousel/BookCarousel';
import Home from './pages/Homepage/Home';
import Addnewbook from './components/AddNewBook/Addnewbook';
import AdminPanel from './pages/AdminPanel/AdminPanel';


function App() {
    return (
       <Router>    
            <Header/>   
            <Routes>
                <Route exact path="/" element = {<Home/>}/>
                <Route path="/test" element = {<AdminPanel/>} />
            </Routes>
        </Router>
    );
}

export default App;
