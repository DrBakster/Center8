import React,{useEffect} from 'react'
import LayoutAdmin from '../layout/LayoutAdmin';

const Admin = () => {
  
  useEffect( () => {
    window.scrollTo( 0, 0 )
  }, [] )

  return (
    
    <LayoutAdmin>
      <div className=' container-fluid px-0 py-3 m-0'>
        <div className='d-flex justify-content-around px-3'>
          <div className='col-6 border-2 bg-light px-1 d-flex flex-column justify-content-strat'>
            <div className='my-1 p-3 bg-info bg-opacity-50 text-dark fw-bold mb-3'> اخبار و اطلاعیه ها</div>
            <div className=' d-flex flex-column border rounded px-2 pt-4 pb-1 position-relative'>
              <div className='my-1 mt-2 p-2 d-flex justify-content-between'>
                <div className='col-7 fw-bold'>شما هیچ اطلاعیه ندارید !</div>
                <div className='col-5 d-flex flex-column text-start ps-2'>
                  <div className='my-1'>
                    <span>تاریخ : </span><span>----/--/--</span>
                  </div>
                  <div className='my-1'>
                    <span>ساعت : </span><span>--:--</span>
                  </div>
                </div>
              </div>
              <p className='fromto m-0'> از طرف مرکز 8 زعفرانیه </p>
              <button className='d-grid col-4 me-auto btn btn-primary m-0 p-1 px-1 ms-0 my-3 position-absolute btn-absolute'>مشاهده اطلاعیه</button>
            </div>
          </div>
          <div className='col-6 border-2 bg-light px-1 d-flex flex-column justify-content-strat'>
            <div className='my-1 p-3 justify-content-between d-flex bg-info bg-opacity-50 text-dark mb-3'> <span className='fw-bold'>گردش کار </span><span className='text-primary ms-5'> (10 گردش آخر) </span></div>
            <div className="col-12 d-flex align-items-center bg-primary py-2 my-2 rounded">
              <form className='d-flex align-items-center form-control bg-transparent border-0'>
                <input type="search" className='form-control SerInput p-1' placeholder='کدپیگیری را وارد کنید' />
                <button className='border-0 bg-transparent'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=' svgOne text-white mx-2'>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
              </form>
            </div>
            <div className=' d-flex flex-column border rounded px-2 pt-4 pb-1 position-relative'>
              <div className='my-1 mt-2 p-2 d-flex justify-content-between'>
                <div className='col-7 fw-bold'>شما هیچ  فعالیتی نداشتید !</div>
                <div className='col-5 d-flex flex-column text-start ps-2'>
                  <div className='my-1'>
                    <span>تاریخ : </span><span>----/--/--</span>
                  </div>
                  <div className='my-1'>
                    <span>ساعت : </span><span>--:--</span>
                  </div>
                </div>
              </div>
              <p className='fromto m-0'> از طرف مرکز 8 زعفرانیه </p>

              <button className='d-grid col-4 me-auto btn btn-primary m-0 p-1 px-1 ms-0 my-3 position-absolute btn-absolute'>مشاهده اطلاعیه</button>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  )
}

export default Admin;

