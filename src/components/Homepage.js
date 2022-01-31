import react from "react";
import '../css/style.css';
export default function Homepage() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <img className='logo' src="./img/logo.png" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <p>MAKE YOUR FORMS FOR FREE</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className='mb-3'>
                            <p>Simple way to add multipul fields</p>
                        </div>
                        <div className='mb-3'>
                            <p>Cretae a forms to collect information for your school,college,business and so on.</p>
                        </div>
                        <div className='mb-3'>
                            <p>Get custom short links for free and share to collect information.</p>
                        </div>
                        <div className='mb-3'>
                            <p>View collected information in tables.</p>
                        </div>
                        <div className='mb-3'>
                            <p> Export your collected data in excel format</p>
                        </div>
                        <div className='mb-3'>
                            <p>Create unlimited forms in one account</p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='mb-3'>
                            <h3>START COLLECTING INFORMATION</h3>
                        </div>
                        <div className='mb-3'>
                            <input type="text"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}