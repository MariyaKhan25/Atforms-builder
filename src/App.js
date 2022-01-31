import logo from './logo.svg';
import Login from './Login';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col d-flex justify-content-center'>
          <img className='logo' src="./img/logo.png" />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h1>MAKE YOUR FORMS FOR FREE</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 element'>
          <div className='mb-3'><p>Simple way to add multipul fields</p></div>
          <div className='mb-3'><p>Create a forms to collect information for your school,college,business and so on.</p></div>
          <div className='mb-3'><p>Get custom short links for free and share to collect information.</p></div>
          <div className='mb-3'><p>View collected information in tables.</p></div>
          <div className='mb-3'><p> Export your collected data in excel format</p></div>
          <div className='mb-3'><p>Create unlimited forms in one account</p></div>
        </div>
        <div className='col-6'>
          <div className='CreateForm'>
            <div className='row'>
              <div className='col d-flex justify-content-center'>
                <h3 className='text-white p-4'> START COLLECTING INFORMATION</h3>
              </div>
            </div>
          </div>
          <div className='FormContainer'>
            <div className='row px-3 '>
              <div className='col'>
                <label for="exampleFormControlInput1" className="form-label pt-2">Enter Your Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" />
              </div>
            </div>
            <div className='row px-3'>
              <div className='col'>
                <label for="exampleFormControlInput1" className="form-label pt-3">Enter Your Email ID</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" />
              </div>
            </div>
            <div className='row py-5'>
              <div className='col d-flex justify-content-center'>
                <button type="button" className="btn btn-secondary">Save and Create Form</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
