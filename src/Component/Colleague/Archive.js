import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import LayoutColleague from '../layout/LayoutColleague'


const Archive = () => {
  return (
      <LayoutColleague>
          <div className='container-fluid py-2 px-3 m-0 my-2 mb-4'>
              <div className='my-3'>
                  <div className='border border-2 p-2'>
                      <fieldset className=''>
                          <legend className='bg-primary bg-opacity-50 p-2'> پرونده ها و نامه های بایگانی </legend>
                          <p className='m-0 p-2 border rounded'>
                              <div className=''>
                                  <Accordion className='mx-1 my-1'>
                                      <Accordion.Item eventKey="0">
                                          <Accordion.Header> 1. نامه درخواست تغییر شعبه</Accordion.Header>
                                          <Accordion.Body>
                                              نامه درخواست
                                          </Accordion.Body>
                                      </Accordion.Item>
                                      <Accordion.Item eventKey="1">
                                          <Accordion.Header> 2. تمدید گواهی برای آموزشگاه فنی منطقه 22 </Accordion.Header>
                                          <Accordion.Body>
                                              تمدید گواهی
                                          </Accordion.Body>
                                      </Accordion.Item>
                                      <Accordion.Item eventKey="2">
                                          <Accordion.Header> 3. تعویض گواهی آموزشگاه منطقه 19 </Accordion.Header>
                                          <Accordion.Body>
                                              تعویض گواهی
                                          </Accordion.Body>
                                      </Accordion.Item>

                                  </Accordion>
                              </div>
                          </p>
                      </fieldset>
                  </div>
              </div>
          </div>
      </LayoutColleague>
  )
}

export default Archive