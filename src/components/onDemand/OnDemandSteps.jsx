import React from 'react'
import { arrow } from '../../assets'
import { StepsData } from '../../constents/OnDemandScreenConst'
import "./ondemandstep.css"

const OnDemandSteps = () => {
    return (
        <div className='' id='onDemandStep'>
            <div className='container py-[52px] lg:py-[6.25rem] max-lg:px-9'>
                <div className='flex lg:justify-center'>
                    <p className=' font-bold text-normal lg:text-large leading-large lg:leading-xlarge' style={{ letterSpacing: "-1px" }}>
                        <span className='text-secondary'>How </span>On-Demand Staffing Works</p>
                </div>

                {/* <div className='pt-12'>
                    <div id='stepSection' className='grid grid-cols-2 lg:grid-cols-4 lg:grid-flow-col gap-4'>
                        <div className='col-span-1'>
                            <div className='flex justify-between'>
                                <img src={step1} alt="step logo" width="80px" height="80px" />
                                <img src={arrow} alt="arrow" className='pr-5 hidden lg:block' />
                            </div>
                            <p className='mt-2 text-sm'>STEP 1</p>
                            <p className='mt-2 text-2xl font-bold leading-8'>Quick Signup</p>
                            <p className='mt-2 text-md leading-6'>t</p>
                        </div>

                        <div className='col-span-1'>
                            <div className='flex justify-between'>
                                <img src={step1} alt="" width="80px" height="80px" />
                                <img src={arrow} alt="" className='pr-5 hidden lg:block' />
                            </div>
                            <p className='mt-2 text-sm'>STEP 2</p>
                            <p className='mt-2 text-2xl font-bold leading-8'>Post Jobs 24/7</p>
                            <p className='mt-2 text-md leading-6'>Use our mobile app or web platform from the office or on the go, any time of day</p>
                        </div>

                        <div className='col-span-1'>
                            <div className='flex justify-between'>
                                <img src={step1} alt="" width="80px" height="80px" />
                                <img src={arrow} alt="" className='pr-5 hidden lg:block' />
                            </div>
                            <p className='mt-2 text-sm'>STEP 3</p>
                            <p className='mt-2 text-2xl font-bold leading-8'>View Matches</p>
                            <p className='mt-2 text-md leading-6'>With thousands of ready-to-go workers you can watch your jobs being filled in real time</p>
                        </div>

                        <div className='col-span-1'>
                            <div className='flex justify-between'>
                                <img src={step1} alt="" width="80px" height="80px" />
                            </div>
                            <p className='mt-2 text-sm'>STEP 4</p>
                            <p className='mt-2 text-2xl font-bold leading-8'>We Do The Rest!</p>
                            <p className='mt-2 text-md leading-6'>We take care of payroll, deductions and insurance</p>
                        </div>
                    </div>
                </div> */}

                <div className='pt-8 lg:pt-12'>
                    <div id='stepSection' className='grid grid-cols-2  lg:grid-cols-4 lg:grid-flow-col gap-4'>
                        {StepsData.map((elm, index) => {
                            return (
                                <div className='col-span-1 max-w-[264px]'>
                                    <div className='flex justify-between'>
                                        <img src={elm.img} alt="step logo" width="80px" height="80px" />
                                        {index+1 != StepsData.length && <img src={arrow} alt="arrow" className='pr-5 hidden lg:block' />}
                                    </div>
                                    <p className='mt-5 text-sm'>{elm.name}</p>
                                    <p className='mt-3 text-xl lg:text-2xl font-bold leading-8'>{elm.heading}</p>
                                    <p className='mt-3 text-[0.625rem] lg:text-[1rem] leading-4 lg:leading-6'>{elm.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default OnDemandSteps