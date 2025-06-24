import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { SignUp } from './Components/SignUp/SignUp';
import { Landing } from './Pages/Landing';
import { Login } from './Components/Login/Login';
import { Freetrial } from './Pages/Freetrial';
import { Terms } from './Components/Terms/Terms';
import { useEffect } from 'react';
import { Privacy } from './Components/Privacy/Privacy';
import { Customer } from './Pages/Customer';


function App() {
  useEffect(() => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
}, []);
  return (
    <div className="App">
      <Router>
        <Routes> 
          <Route path="/" element={<Landing/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>} />
          <Route path='/freetrial' element={<Freetrial/>} />
          <Route path='/terms' element={<Terms />}/>
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/customer' element={<Customer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
