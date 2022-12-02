import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import LayoutUser from '../layout/LayoutUser';
import HeaderEstablished from './headerEstablished';
import TabVeiws1 from '../Admin/TabVeiws1'
import Form from 'react-bootstrap/Form';


const Established6 = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <LayoutUser >
            <div className='container-fluid d-flex flex-column align-item-center justify-content-center bg-light pb-5'>
                <div className="EsSpan2 mt-3">
                    <HeaderEstablished />
                </div>
                <div className="my-5 mx-5">
                    <TabVeiws1 />
                </div>
               
                <div className='d-flex justify-content-center fw-bold mb-5 mt-5 '>
                    <p className='text-center py-3 mx-5 bg-info bg-opacity-50 px-5 fw-bold'>
                        کاربر گرامی پس از <span className='text-primary'>پرداخت</span> هزینه ثبت نام، رسید پرداخت را در قسمت مربوطه <span className='text-danger'>آپلود</span> نمایید
                    </p>
                </div>
                <div className='d-flex justify-content-center m-2 mb-5'>
                    <div className='mt-0 w-50 text-center'>
                        <div className='border border-1 bg-secondary bg-opacity-25 py-0 px-2 mt-1 '>
                            <div className='d-flex flex-column justify-content-center align-items-center px-2 py-5'>
                                <p className='fw-bold mx-0 my-5 ps-4 d-flex flex-column align-items-center justify-content-center'>
                                    <Link to="#" className='text-white text-decoration-none'>
                                        <span className='px-5 py-3 bg-primary w-auto'> پرداخت هزینه تاسیس </span>
                                    </Link>
                                </p>
                                <p className='fw-bold mx-0 my-2 pt-5 d-flex flex-column align-items-center justify-content-center border-top border-dark'>
                                    <Form.Group controlId="formFileMultiple1" className="d-flex align-items-center">
                                        <Form.Label className=" px-0 py-2 EsFormLable" > آپلود رسید </Form.Label>
                                        <Form.Control className="bg-primary text-white" type="file" multiple />
                                    </Form.Group>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </LayoutUser>
    );
}

export default Established6;