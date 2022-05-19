import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import User from './Pages/Dashboard/User';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';

function App() {
  return (
    <div className='bg-white text-black'>
      <div className='max-w-7xl mx-auto  px-12' >
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/appointment' element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }></Route>
          <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
            <Route index element={<MyAppointments />} />
            <Route path='review' element={<MyReview />} />
            <Route path='history' element={<MyHistory />} />
            <Route path='users' element={
              <RequireAdmin>
                <User />
              </RequireAdmin>} />
            <Route path='addDoctor' element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>} />
          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
