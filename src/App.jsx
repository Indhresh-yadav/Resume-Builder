import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SelectionPage from './componets/SelectionPage'
import FormPage from './componets/Formpage';
import PersonalInfo from './componets/PersonalInfo';
import ProfessionalDetails from './componets/ProfessionalDetails';
import EducationDetails from './componets/EducationDetails';
import Skills from './componets/Skills';
import RegistrationPage from './componets/RegistrationPage';
import Resume1 from './componets/Resume1';
import Resume2 from './componets/Resume2';
import Resume3 from './componets/Resume3';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
import Login from './componets/Login';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  

  return (
    <>
  <BrowserRouter>
        <Navbar/>
        <ToastContainer/>
      <Routes>
        <Route path='/' element={<RegistrationPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/resume1' element={<Resume1/>}/>
        <Route path='/resume2' element={<Resume2/>}/>
        <Route path='/proffessional' element={<ProfessionalDetails/>} />
        <Route path="/selectionpage" element={<SelectionPage />} />
        <Route path='/personalinfo' element={<PersonalInfo/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/educationdetails' element={<EducationDetails/>}></Route>
        <Route path='/resume3' element={<Resume3/>}></Route>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
