import React,{useEffect} from 'react';
import HeaderEstablished from './headerEstablished';
import TabVeiws1 from '../Admin/TabVeiws1'
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Established5 = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <>
            <div className='container-fluid d-flex flex-column align-item-center justify-content-center bg-light'>
                <div className="EsSpan2 mt-3">
                    <HeaderEstablished />
                </div>
                <div className="my-5 mx-5">
                    <TabVeiws1 />
                </div>
                <div className='d-flex justify-content-center m-2'>
                    <div className='mt-0 w-50 text-center'>
                        <div className='border border-1 bg-secondary bg-opacity-25 py-3 px-2 mt-1 '>
                            <div className='my-2 mx-1'>
                                <p className='text-center py-3 mx-2 bg-warning fw-bold'>
                                    کاربر گرامی بعد از پرینت و امضاء در برگه ها ، درخواست خود را آپلود نمایید
                                </p>
                            </div>
                            <div className='px-2 py-3'>
                                <p className='fw-bold m-0 d-flex flex-column align-items-center'>
                                    <input type="file" className='me-lg-5 pe-lg-5 me-md-3 pe-md-3 pe-2 me-3 mb-5' />
                                    <span className='px-5 py-3 bg-primary w-auto'>آپلود استاندارد ها</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center my-4">
                    <div className='my-2 mx-5'>
                        <p className='text-center py-3 mx-5 bg-info fw-bold'>
                            درخواست خود را تایید و ارسال نمایید و منتظر تایید توسط کارشناس مرکز باشید 
                        </p>
                    </div>
                    <div >
                        <Link to="/Established6" className="btn btn-success rounded-0 px-4 py-2 btn-establish">
                             ثبت درخواست
                            <span className="pe-3"><Icon.ArrowLeftCircleFill /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Established5;
