

import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import TableUsers from './components/TableUser';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <>
      <div className='app-container'>

        <Container>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<TableUsers/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
