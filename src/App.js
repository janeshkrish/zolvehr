import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { SignUp } from './Components/SignUp/SignUp';
import { Landing } from './Pages/Landing';
import { Login } from './Components/Login/Login';
import { Freetrial } from './Pages/Freetrial';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes> 
          <Route path="/" element={<Landing/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>} />
          <Route path='/freetrial' element={<Freetrial/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
