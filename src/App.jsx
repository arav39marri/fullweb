
import './App.css'
import Front from './Componenets/Front'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Creat from './Routes/Creat'
import View from './Routes/View'
import Delete from './Routes/Delete'
import Update from './Routes/Update'

function App() {
  
  return (
    
  <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Front />}/>                                 
      <Route path='/Creat' element={<Creat/>}/>       
      <Route path='/View' element={<View/>}/>
      <Route path='/Delete/' element={<Delete/>}/>
      <Route path='/Update/' element={<Update/>}/>                                     

     </Routes>
        
    </BrowserRouter>
  </>
  )
}

export default App
