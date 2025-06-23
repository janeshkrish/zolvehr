import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { SignUp } from './Components/SignUp/SignUp';
import { Landing } from './Pages/Landing';
import { Login } from './Components/Login/Login';
import { Freetrial } from './Pages/Freetrial';
import { Terms } from './Components/Terms/Terms';
import { ScrollManager } from './Components/Scroll/ScrollManager';


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollManager />
        <Routes> 
          <Route path="/" element={<Landing/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>} />
          <Route path='/freetrial' element={<Freetrial/>} />
          <Route path='/terms' element={<Terms />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
