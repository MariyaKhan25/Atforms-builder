import React from "react";
import Footer from "./Footer";
export default function Userdashboard4() {
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
                            <div className="row px-3">
                                <div className="col">
                                    <label for="exampleFormControlInput1" className="form-label pt-2">Select Your Gender *</label>
                                </div>
                            </div>
                            <div className="row px-3">
                                <div className="col-6">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <label class="form-check-label" for="inlineRadio1">Male</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <label class="form-check-label" for="inlineRadio1">Female</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row px-3">
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Enter Your Address</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row px-3">
                                <div className="col">
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Give Suggestion</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='row my-5'>
                                <div className='col ms-3 me-3'>
                                    <hr />
                                </div>
                            </div>
                            <div className='row mb-3 pb-5 d-flex justify-content-center'>
                                <div className='col-6 d-flex justify-content-center'>
                                    <button type="button" className="btn btn-secondary">Back</button>
                                </div>
                                <div className="col-6">
                                    <button type="button" className="btn btn-secondary">Create Link And publish</button>
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