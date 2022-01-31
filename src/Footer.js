import logo from './logo.svg';
import react from "react";
import './App.css';


export default function Footer() {
    return (
        <div>
            
            <div className='footer'>
            <footer className='text-dark'>
                <div className='row mx-3'>
                    <div className='col'>
                        <hr />
                    </div>
                </div>
                <div className='row mx-3'>
                    <div className='col-6'>
                        Develop by - Arnav Technosys
                    </div>
                    <div className='col-6 text-end'>
                        Powered by ATJOIN PVT LTD
                    </div>
                </div>
            </footer>
           </div>
        </div>
    );
}