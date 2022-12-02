import SignUpModal from './Component/singUp/singup';
import LoginModal from './Component/login/login';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// react-query
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// end

import './Component/css.css'
import Home from './pages/Home';
import MenuContext from './contexts/MenuContext';
import Established from './Component/Established/Established';
import Established1 from './Component/Established/Established-1';
import Established2 from './Component/Established/Established2';
import Established3 from './Component/Established/Established3';
import Established4 from './Component/Established/Established4';
import Established5 from './Component/Established/Established5';
import Established6 from './Component/Established/Established6';
import KHabar from './Component/KHabr/KHabar';
import KHabar1 from './Component/KHabr/KHabar1';
import KHabar2 from './Component/KHabr/KHabar2';
import KHabar3 from './Component/KHabr/KHabar3';
import Admin from './Component/Admin/Admin';
import Ezafereshte from './Component/Admin/Ezafereshte';
import Maliat from './Component/Admin/Maliat';
import DarkhasteSHoab from './Component/Admin/DarkhasteSHoab';
import DarkhasteGovahi from './Component/Admin/DarkhasteGovahi';
import DarkhasteTaghier from './Component/Admin/DarkhasteTaghier';
import Tamdid from './Component/Admin/Tamdid';
import TamdidTaeid from './Component/Admin/TamdidTaeid';
import TamdidAzmon from './Component/Admin/TamdidAzmon';
import TamdidNatije from './Component/Admin/TamdidNatije';
import EzafereshteUpload from './Component/Admin/EzafereshteUpload';
import EzafeOkey from './Component/Admin/EzafeOkey';
import FormShekayat from './Component/SecendAction/FormShekayat/FormShekayat'

// Colleague

import Colleague from '../src/Component/Colleague/Colleague'
import LayoutColleague from './Component/layout/LayoutColleague';

// 

import LayoutUser from './Component/layout/LayoutUser';
import ModalStateContext from './contexts/ModalStateContext';
import ProfileAdmin from './Component/Admin/ProfileAdmin';
import ProfileColleague from './Component/Colleague/ProfileColleague';
import Archive from './Component/Colleague/Archive';
import Ezafereshte2 from './Component/Admin/Ezafereshte2';
import Ezafereshte21 from './Component/Admin/Ezafereshte21';


const queryClient = new QueryClient()
const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <MenuContext>
        <ModalStateContext>
          <Router>
            <SignUpModal />
            <LoginModal />
            <Routes>
              <Route exact path='/center8' element={<Home />} />
              <Route exact path='/KHabar' element={<KHabar />} />
              <Route exact path='/KHabar1' element={<KHabar1 />} />
              <Route exact path='/KHabar2' element={<KHabar2 />} />
              <Route exact path='/KHabar3' element={<KHabar3 />} />
              <Route path='/center8/Established' element={<LayoutUser><Established /></LayoutUser>} />
              <Route path='/Established-1' element={<LayoutUser><Established1 /></LayoutUser>} />
              <Route path='/Established2' element={<LayoutUser><Established2 /></LayoutUser>} />
              <Route path='/Established3' element={<LayoutUser><Established3 /></LayoutUser>} />
              <Route path='/Established4' element={<LayoutUser><Established4 /></LayoutUser>} />
              <Route path='/Established5' element={<LayoutUser><Established5 /></LayoutUser>} />
              <Route path='/Established6' element={<Established6 />} />
              <Route path='/FormShekayat' element={<FormShekayat />} />
              {/*  */}

              <Route path='/Colleague' element={<Colleague />} />
              <Route path='/ProfileColleague' element={<ProfileColleague />} />
              <Route path='/Archive' element={<Archive />} />
              {/*  */}
              <Route path='/admin' element={<Admin />} />
              <Route path='/ProfileAdmin' element={<ProfileAdmin />} />
              <Route path='/Ezafereshte' element={<Ezafereshte />} />
              <Route path='/Ezafereshte2' element={<Ezafereshte2 />} />
              <Route path='/Ezafereshte21' element={<Ezafereshte21 />} />
              <Route path='/Maliat' element={<Maliat />} />
              <Route path='/DarkhasteTaghier' element={<DarkhasteTaghier />} />
              <Route path='/DarkhasteSHoab' element={<DarkhasteSHoab />} />
              <Route path='/DarkhasteGovahi' element={<DarkhasteGovahi />} />
              <Route path='/Tamdid' element={<Tamdid />} />
              <Route path='/TamdidTaeid' element={<TamdidTaeid />} />
              <Route path='/TamdidAzmon' element={<TamdidAzmon />} />
              <Route path='/TamdidNatije' element={<TamdidNatije />} />
              <Route path='/EzafereshteUpload' element={<EzafereshteUpload />} />
              <Route path='/EzafeOkey' element={<EzafeOkey />} />


              <Route path="*" element={<Navigate replace to="/center8" />} />
              <Route path="/" element={<Navigate replace to="/center8" />} />
              <Route path="" element={<Navigate replace to="/center8" />} />
            </Routes>
          </Router>
        </ModalStateContext>
      </MenuContext>
    </QueryClientProvider>
  );
}

export default App;

