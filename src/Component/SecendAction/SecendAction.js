import React from "react";
import { Link } from 'react-router-dom';

import Ic1 from '../../img/ic1.svg';
import Ic3 from '../../img/ic3.svg';
import Ic4 from '../../img/ic4.svg';
import Ic5 from '../../img/ic5.svg';
import Ic6 from '../../img/ic6.svg';
import Ic7 from '../../img/ic7.svg';


const SecendAction = () => {
    return (
        <>
            <div className="row justify-content-center py-5 mx-2">
                <div className="dastrasy col-3 col-md-3 col-lg-3 p-1 m-0 text-center d-none d-md-block">
                    <div className="py-0 py-md-1 py-lg-0">
                        <ul className="d-flex flex-column justify-content-end list-unstyled text-end p-0 pe-md-3 ">
                        <p className="fw-bolder text-center p-0 mb-2">دسترسی های سریع</p>
                            <Link className="text-decoration-none border-bottom px-1" onClick={People} to="" target="_blank">
                                <li className="btn text-end my-1 my-md-1 py-1 py-md-3 border-0 "> اداره کل کشور  </li>
                            </Link>
                            <Link className="text-decoration-none border-bottom px-1" onClick={About} to="" target="_blank">
                                <li className="btn text-end my-1 my-md-1 py-1 py-md-3 border-0 ">اداره کل استان تهران </li>
                            </Link>
                            <Link className="text-decoration-none border-bottom px-1" to="">
                                <li className="btn text-end my-1 my-md-1 py-1 py-md-3 border-0 ">مناقصه و مزایده </li>
                            </Link>
                            <Link className="text-decoration-none border-bottom px-1" to="">
                                <li className="btn text-end my-1 my-md-1 py-1 py-md-3 border-0 "> خیرین مهارتی </li>
                            </Link>
                            <Link className="text-decoration-none border-bottom px-1" to="">
                                <li className="btn text-end my-1 my-md-1 py-0 py-md-3 border-0 ">نظرسنجی از پرتال </li>
                            </Link>
                            <Link onClick={pey} className="text-decoration-none px-1" to="">
                                <li className="btn text-end my-1 my-md-1 py-1 py-md-3 border-0 ">کارت اعتباری </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="col-11 col-md-9 col-lg-8 d-flex flex-column flex-md-column justify-content-between py-0 px-1 mt-0">
                    <div className="col-12 col-md-12 d-flex flex-row justify-content-around pb-1 pb-lg-2 mb-md-1 ms-0 p-0">
                        <Link className="col col-md-4 col-lg-3 text-decoration-none link1 rounded text-center bg-primary my-0 mx-1 mx-md-0 part1" to="/center8/Established">
                            <div className="">
                                <img className="mb-0 mb-md-1 mb-lg-2 slideimg" src={Ic1} alt="" />
                                <p className="small2 fw-bold text-white fs-5 d-none d-md-block m-0 pb-1">تاسیس</p>
                            </div>
                        </Link>
                        <Link className="col col-md-3 text-decoration-none link1 rounded text-center bg-primary my-0 mx-1 mx-md-0 part1" to="/FormShekayat">
                            <div className="">
                                <img className="mb-0 mb-md-1 mb-lg-2 slideimg" src={Ic7} alt="" />
                                <p className="small2 fw-bold text-white fs-5 d-none d-md-block m-0 pb-1">  فرم شکایات مردمی  </p>
                            </div>
                        </Link>
                        <Link onClick={govahi} className="col col-md-4 col-lg-3 text-decoration-none link1 rounded text-center bg-primary my-0 mx-1 mx-md-0 part1" to="#">
                            <div className="">
                                <img className="mb-0 mb-md-1 mb-lg-2 slideimg" src={Ic3} alt="" />
                                <p className="small2 fw-bold text-white fs-5 d-none d-md-block m-0 pb-1">تمدید گواهینامه </p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-12 col-md-12 d-flex flex-row justify-content-around mb-0 mb-md-1 ms-2 p-0">
                        <Link onClick={kart} className="col col-md-4 col-lg-3 text-decoration-none link1 rounded text-center bg-primary my-0 mx-1 mx-md-0 part1" to="#">
                            <div className="">
                                <img className="mb-0 mb-md-1 mb-lg-2 slideimg" src={Ic4} alt="" />
                                <p className="small2 fw-bold text-white fs-5 d-none d-md-block m-0 pb-1">کارت آزمون</p>
                            </div>
                        </Link>
                        <Link className="col col-md-3 text-decoration-none link1 rounded text-center bg-primary my-0 mx-1 mx-md-0 part1" to="#">
                            <div className="">
                                <img className="mb-0 mb-md-1 mb-lg-2 slideimg" src={Ic5} alt="" />
                                <p className="small2 fw-bold text-white fs-5 d-none d-md-block m-0 pb-1">نتایج آزمون</p>
                            </div>
                        </Link>
                        <Link onClick={azmoon} className="col col-md-4 col-lg-3 text-decoration-none link1 rounded text-center bg-primary my-0 mx-1 mx-md-0 part1" to="#">
                            <div className="">
                                <img className="mb-0 mb-md-1 mb-lg-2 slideimg" src={Ic6} alt="" />
                                <p className="small2 fw-bold text-white fs-5 d-none d-md-block m-0 pb-1">آزمون ادواری </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

function About() {

    window.open( 'http://tehrantvto.ir/', '_blank' );

    return null;
}
function kart() {

    window.open( 'http://azmoon.portaltvto.com/card/card/index/1/80', '_blank' );

    return null;
}
function pey() {

    window.open( 'https://pay.portaltvto.com/pay/bmi2/shop', '_blank' );

    return null;
}
function azmoon() {

    window.open( 'http://azmoon.portaltvto.com/result/result/public_pg_amali', '_blank' );

    return null;
}
function People() {

    window.open( 'https://irantvto.ir/', '_blank' );

    return null;
}
// function office() {

//     window.open( 'http://portaltvto.com/', '_blank' );

//     return null;
// }
function govahi() {

    window.open( 'http://advari.irantvto.ir/index.php/insertion_data/pay_person', '_blank' );

    return null;
}


export default SecendAction;




