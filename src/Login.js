import logo from './logo.svg';
import react from 'react';
import './App.css';
import './css/style.css'
import Footer from './Footer';


export default function Login() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <img className='logo1' src="./img/logo.png" />
          </div>
          <div className='col-6 text-end '>
            <p className='logout'>Welcome <strong>[user-name]</strong>           
            <strong className='text-danger'> &nbsp;&nbsp;&nbsp;LogOut</strong></p>
          </div> 
        </div>
        <div className='row'>
          <div className='col-12'>
            <h1>WELCOME TO ATFORMS FORM BUILDER</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-3 content'>
            <div className='mb-5'><p>My Dashboard</p></div>
            <div className='mb-5'><p>Saved Form</p></div>
            <div className='mb-5'><p>Create Forms</p></div>
            <div className='mb-5'><p>Logout</p></div>
          </div>
          <div className='col-9 text-danger'>
            <p> <strong>Please check your E-mail for E-mail varification link and click to verify and email and access your form builder dashboard.</strong></p>
            <p><strong>If you haven't recive verification mail please click to </strong></p>
            <p><strong><a href='#'> Re-send E-mail</a></strong></p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
          <Footer />
          </div>
        </div>
        

      </div>

    </div>

  );
}
































