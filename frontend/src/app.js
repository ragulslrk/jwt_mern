 import Login from './login'
 import Dashboard  from './dashboard';
import {BrowserRouter,Route,Routes  } from 'react-router-dom'
 const App = () => {    
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/login_front' element={<Login/>}/>
      <Route exact path='/' element={<Login/>}/>
      
       <Route exact path='/dashboard_front' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    
    
    </>
    );
 }
  
 export default App;