import { Route, Routes } from 'react-router-dom';
import InputField from './components/InputField';
import User from './components/User';
import toast, { Toaster } from 'react-hot-toast';


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<InputField/>}/>
      <Route path='/user' element={<User/>}/>
    </Routes> 
    <Toaster /> 
    </>
  )
}

export default App
