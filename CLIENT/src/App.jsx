import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import SmsForm from './Pages/SmsForm';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<SmsForm/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}