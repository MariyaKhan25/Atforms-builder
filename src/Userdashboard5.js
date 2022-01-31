import React from "react";
import Footer from "./Footer";
export default function Userdashboard5() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <img className='logo1' src="./img/logo.png" />
                    </div>
                    <div className='col-6 text-end'>
                        <p className='logout'>Welcome <strong>[user-name]</strong>
                            <strong className='text-danger'> &nbsp;&nbsp;&nbsp;LogOut</strong></p>
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
                                    <h3 className='text-white p-4'>[ FORM NAME ] FORM FIELDS</h3>
                                </div>
                            </div>
                        </div>
                        <div className='FormContainer'>
                            <div className='row px-3 '>
                                <div className='col'>
                                    <label for="exampleFormControlInput1" className="form-label pt-2">Generated Link</label>
                                    <input class="form-control" type="text" value="https://atjoin.in/my-form-245..." aria-label="readonly input example" readonly></input>
                                </div>
                            </div>
                            <div className='row px-3'>
                                <div className='col'>
                                    <label for="exampleFormControlInput1" className="form-label pt-3">Create Custom Link</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                            </div>
                            <div className='row mx-3'>
                                <div className='col-12'>
                                    <hr />
                                </div>
                            </div>
                            <div className='row mb-3 pb-3 d-flex justify-content-center'>
                                <div className='col-3 d-flex justify-content-center'>
                                    <button type="button" className="btn btn-secondary">Save Link </button>
                                </div>
                                <div className="col-3 d-flex justify-content-center">
                                    <button type="button" className="btn btn-secondary">Publish Now</button>
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
