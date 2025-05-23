import './App.css';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from './router/app-router';
import 'bootstrap/dist/css/bootstrap.css';
// require('dotenv').config();
// require.resolve("os-browserify/browser");

function App() {
  
  return (
    <>
    <ToastContainer  containerId={'TR'} />
    <ToastContainer  containerId={'BC'} />
    <AppRouter />
  </>
  );
}

export default App;
