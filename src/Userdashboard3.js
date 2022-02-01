import logo from './logo.svg';
import react from 'react';
import './App.css';
import Footer from './Footer';
export default function Userdashboard3() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <img className='logo1' src="./img/logo.png" />
                    </div>
                    <div className='col-3 text-end '>
                        <p className='logout'>Welcome <strong>[user-name]</strong> </p>
                    </div>
                    <div className='col-2'>
                        <strong className='text-danger'>LogOut</strong>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3 content'>
                        <div className='mb-5'><p>My Dashboard</p></div>
                        <div className='mb-5'><p>Saved Form</p></div>
                        <div className='mb-5'><p>Create Forms</p></div>
                        <div className='mb-5'><p>Logout</p></div>
                    </div>
                    <div className='col-6'>
                        <div className='CreateForm'>
                            <div className='row'>
                                <div className='col d-flex justify-content-center'>
                                    <h3 className='text-white py-4'>[ FORM NAME ] FROM FIELDS</h3>
                                </div>
                            </div>

                            <div className='FormContainer px-4'>

                                <div className='row '>
                                    <div className='col'>
                                        <label for="exampleFormControlInput1" className="form-label pt-2">Field Title</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-6'>
                                        <label for="exampleFormControlInput1" className="form-label pt-3">Field Type</label>
                                    </div>

                                    <div className='col-6'>
                                        <button type="button" className="btn btn-secondary float-end mt-2">Optional</button>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                            <label class="form-check-label" for="exampleRadios1">
                                                Short input text
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label" for="exampleRadios2">
                                             Check Box
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label" for="exampleRadios2">
                                                Radio Button 
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label" for="exampleRadios2">
                                                File Upload
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label" for="exampleRadios2">
                                                Date
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label" for="exampleRadios2">
                                                Long Input Text
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label" for="exampleRadios2">
                                                Drop Down Menu
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row '>
                                    <div className='col'>
                                        <label for="exampleFormControlInput1" className="form-label pt-2">Field Title</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                    <label for="exampleFormControlInput1" className="form-label pt-3">Field Type</label>
                                    </div>
                                    <div className='col-6'>
                                        <button type="button" className="btn btn-secondary float-end mt-2">Optional</button>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                            <label class="form-check-label" for="exampleRadios1">
                                                Short input text
                                            </label>
                                        </div>
                                        </div>
                                        <div className='col-6'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label" for="exampleRadios2">
                                                Check Box
                                            </label>
                                        </div>
                                        </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label" for="exampleRadios2">
                                                Radio Button
                                            </label>
                                        </div>
                                        </div>
                                        <div className='col-6'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label" for="exampleRadios2">
                                                File Upload
                                            </label>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='row'>
                                    <div className='col-6'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label" for="exampleRadios2">
                                                Date 
                                            </label>
                                        </div>
                                        </div>
                                        <div className='col-6'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label" for="exampleRadios2">
                                                Long Input Text
                                            </label>
                                        </div>
                                        </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label" for="exampleRadios2">
                                                Drop Down Menu
                                            </label>
                                        </div>
                                    </div>
                                    </div>
                                
                                <div className='row float-end me-3'>
                                    <div className='col'>
                                        <button type="button" className="btn btn-secondary">Add More Field</button>
                                    </div>
                                </div>
                                
                            <div className='row mt-5'>
                                <div className='col-12'>
                                    <hr />
                                </div>
                            </div>
                                <div className='row pb-3'>
                                    <div className='col d-flex justify-content-center'>
                                        <button type="button" className="btn btn-secondary">Save and Create Form</button>

                                    </div>
                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                
                

                <div className='row'>
                    <div className='col-12'>
                       <Footer />
                    </div>
                </div>
                </div>
            </div>


        




    );
}
