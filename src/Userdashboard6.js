import React from "react";
import Footer from "./Footer";
export default function Userdashboard6() {
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
                        <div className='CreateForm '>
                            <div className='row'>
                                <div className='col d-flex justify-content-center'>
                                    <h3 className='text-white p-4'>Saved Forms</h3>
                                </div>
                            </div>

                            <div className='FormContainer h-75'>
                                <div className='row pt-1 mx-1'>
                                    <div className='col-6'>
                                        <label for="exampleFormControlInput1" className="form-label">1. Personal Information collection</label>
                                    </div>
                                    <div className="col-2 px-1">
                                        <p>View Data</p>
                                    </div>
                                    <div className="col-2 px-1">
                                        <p>Export Data</p>
                                    </div>
                                    <div className="col-2 px-1">
                                        <p>Delete Form</p>
                                    </div>
                                    <hr />
                                </div>

                                <div className='row pt-1 mx-1'>
                                    <div className='col-6'>
                                        <label for="exampleFormControlInput1" className="form-label">2. Collect Customer Data</label>
                                    </div>
                                    <div className="col-2 px-1">
                                        <p>View Data</p>
                                    </div>
                                    <div className="col-2 px-1">
                                        <p>Export Data</p>
                                    </div>
                                    <div className="col-2 px-1">
                                        <p>Delete Form</p>
                                    </div>
                                    <hr />
                                </div>
                                <div className="row pt-1 mx-1">
                                    <div className="col-6">
                                        <label for="exampleFormControlInput1" className="form-label">3. Collect Survey Data</label>
                                    </div>
                                    <div className="col-2 px-1">
                                        <p>View Data</p>
                                    </div>
                                    <div className="col-2 px-1">
                                        <p>Export Data</p>
                                    </div>
                                    <div className="col-2 px-1">
                                        <p>Delete Form</p>
                                    </div>
                                    <hr />
                                </div>

                                <div className="row mx-1">
                                    <div className="col">
                                        <label for="exampleFormControlInput1" className="form-label">4. Job Application for Java Developer</label>
                                    </div>
                                    <div className="col-2 px-1">
                                        <p>View Data</p>
                                    </div>
                                    <div className="col-2 px-1">
                                        <p>Export Data</p>
                                    </div>
                                    <div className="col-2 px-1">
                                        <p>Delete Form</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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