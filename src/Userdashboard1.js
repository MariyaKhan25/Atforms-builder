import logo from './logo.svg';
import react from 'react';
import './App.css';
import Footer from './Footer';
export default function Userdashboard1() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <img className='logo1' src="./img/logo.png" />
          </div>
          <div className='col-6 text-end'>
            <p className='logout'>Welcome <strong>[user-name]</strong> </p>
          </div>
          <div className='col'>
            <strong className='text-danger'>LogOut</strong>
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
          <div className='col-9 text-dark content'>
            <p> <strong> Wlcome [user name ], you can create a forms and share links to collect user data.</strong></p>
            <p><strong>If you haven't recive verification mail please click to </strong></p>
            <p className='ul'><strong><u>Click here to create your first form</u></strong></p>
          </div>
        </div>
        <div className='row'>
         <div className='col'>
           <Footer />
         </div>
           
        </div>


      </div>
    </div >
  );
}
