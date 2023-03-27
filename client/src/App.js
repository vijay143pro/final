
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './components/form/signup/SignUp';
import Signin from './components/form/signin/Signin';
import Proctected from './components/Proctected';
import Home from './components/home/Home'
function App() {
  //<Proctected path="/home" element={<Home/>}/>
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='signin' element={<Signin/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
