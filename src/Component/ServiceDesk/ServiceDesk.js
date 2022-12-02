import React from "react";
import { useState } from "react";
import Arm3 from '../../img/logoo.gif'

const ServiceDesk = () => {
    const [isOpen, setIsOpen] = useState( false )
    return (
        <>
            <div className="container-fluid pb-5">
                <div className="py-5 d-flex flex-column flex-md-row justify-content-center px-1 px-lg-5 border-top border-bottom my-4">
                    <p className="d-flex align-items-center justify-content-between bg-primary text-white col-16 col-md-5 col-lg-5 rounded px-1 py-4 m-0 ms-0 mt-1" >
                        <span className="p-2 px-2 fw-bold fs-4 border-2 border-start text-center">میز خدمت</span>
                        <span className="mx-0 px-1 text-center mx-auto fw-bold text-warning"> برای وارد کردن کد پیگیری روی <span className=" text-danger fs-5">فلش</span> کلیک کنید </span>
                        <div className="ms-1 DeskImg1 d-flex align-items-center justify-content-center text-center rounded m-0">
                            <p className="m-0 ppeygiry d-flex justify-content-center rounded mt-1">
                                <button className="d-flex justify-content-center active33 rounded p-1 m-0 border-0 " onClick={() => setIsOpen( !isOpen )}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="1.9" stroke="currentColor" className="leftleft">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                            </p>
                        </div>
                    </p>
                    <div className={`d-flex align-items-center bg-primary py-2 rounded me-0 me-md-3 mt-1  ${isOpen ? "peydiry2 active33" : "peydiry2"}`}>
                        <form className={`d-flex col-12 align-items-center form-control bg-transparent border-0 ${isOpen ? "peydiry2 active333" : "peydiry2"}`}>
                            <input type="search" className='form-control col-12 SerInput py-2 px-0 bg-white border-0' placeholder='کدپیگیری را وارد کنید' />
                            <button className='border-0 bg-transparent'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=' svgOne text-white mx-2'>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex-column d-md-flex flex-md-row align-content-center justify-content-center justify-content-md-evenly align-items-center my-1">
                    <div className="col-12 px-5 px-md-1 mb-3 col-md-5">
                        <div className="bg-light text-center rounded">
                            <img className="img-fluid deskwork" src={Arm3} alt="سازمان فنی حرفه ای" />
                        </div>
                    </div>
                    <div className="col-12 px-5 px-md-1 mb-3 col-md-5 " id="us">
                        <p className="fw-bold fs-3"> درباره ما </p>
                        <p className="text-p fw-normal">
                            مرکز آموزش فنی حرفه ای شماره هشت زعفرانیه ، آموزش های مهارتی را در دو بخش دولتی و غیردولتی با بهره گیری از مربیان مجرب و تجهیزات پیشرفته کارگاهی ، مطابق با استانداردهای آموزشی در خوشه های صنعت، خدمات ، کشاورزی و فرهنگ و هنر ارائه می دهد این مرکز پتانسیل آموزشی، کارگاه ثابت شهری ، کارگاه جوار دانشگاهی، کارگاه جوار پادگان، کارگاه جوار زندان، کارگاه مهارت آموزی در محیط واقعی کار، کارگاه های مهارت آموزی با گروه هدف بهزیستی، کارگاه های مهارت آموزی با گروه هدف کمیته امداد و آموزشگاه های آزاد مهارت های فنی و حرفه ای را در بخش دولتی و خصوصی ارائه می نماید .شایان ذکر است تعداد آموزشگاه آزاد ویژه خواهران و برادران در مرکز زعفرانیه به 1510 عدد می رسد که طبق شهریه مصوب هیات نظارت مرکزی سازمان آموزش فنی و حرفه ای کشور به متقاضیان ارائه خدمت می دهند .
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceDesk;