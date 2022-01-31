import logo from './logo.svg';
import react from 'react';
import './App.css';
export default function Dashboard() {
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
                                    <h3 className='text-white p-4'> CREATE FORM</h3>
                                </div>
                            </div>
                        </div>
                        <div className='FormContainer'>

                            <div className='row px-3 '>
                                <div className='col'>
                                    <label for="exampleFormControlInput1" className="form-label pt-2">Form Title</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                                </div>
                            </div>

                            <div className='row px-3'>
                                <div className='col'>
                                    <label for="exampleFormControlInput1" className="form-label pt-3">Form Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            <div className='row mx-3'>
                                <div className='col'>
                                    <hr />
                                </div>
                            </div>
                            <div className='row py-3'>
                                <div className='col d-flex justify-content-center'>
                                    <button type="button" className="btn btn-secondary">Save and Create Form</button>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <hr></hr></div>
                    <div className='col-6'>
                        <p>Develop by Arvan Technosys</p>
                    </div>
                    <div className='col-6'>
                        <p className='text-end'>Powered by ATJOIN</p>
                    </div>
                </div>



            </div>
        </div>

    );
}  