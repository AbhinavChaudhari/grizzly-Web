import React from 'react'
import { dayAndRoss, fine, heart, island, lush, mega, mountan, testimonials1 } from '../../assets'
import "./testimonials.css"
import TestimonialsCard from './testimonialsCard/testimonialsCard'
import FeaturedCustomers from '../featuredCustomers/FeaturedCustomers'
import MobileTestimonialsCards from './testimonialsCard/MobileTestimonialsCards'

const Testimonials = () => {
    return (
        <>
            <div className='py-[52px] lg:py-[6.25rem]' id='testimonialBackground'>
                {/* title  */}
                <div className='container lg:mx-auto'>
                    <div className='lg:text-center px-9'>
                        <div className=''>
                            <img src={heart} alt="Heart" className='min-h-12 min-w-12 lg:mx-auto animate-bounce ' />
                        </div>
                        <p className='text-md leading-5 mt-6 lg:mt-8'>TESTIMONIALS</p>
                        <p className='text-normal tracking-[-1px] leading-large lg:text-large font-bold lg:leading-xlarge mt-6 lg:mt-5 capitalize'>See what our <span className='text-secondary'>customers</span> are saying</p>
                    </div>
                </div>

                <div className='hidden lg:block lg:mt-12'>
                    <div className='flex items-center justify-start'>
                        <img src={mountan} alt="Mountan" className='h-[3.75rem]' />
                        {/* testimonialCart */}
                        <div className='container'>
                            <TestimonialsCard testimonials1={testimonials1} />
                        </div>
                        <img src={mountan} alt="Mountan" className='h-[3.75rem] transform -scale-x-100' />
                    </div>
                </div>


                <div className='inline-flex flex-nowrap overflow-hidden lg:hidden w-full mt-[52px]'>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-nowrap overflow-scroll scrolling-touch gap-10 ml-10  animate-infinite-scroll ">
                            <MobileTestimonialsCards testimonials1={testimonials1} />
                            <MobileTestimonialsCards testimonials1={testimonials1} />
                        </div>
                        <div className="flex flex-nowrap overflow-scroll scrolling-touch gap-10 ml-10  animate-infinite-scroll" aria-hidden="true">
                            <MobileTestimonialsCards testimonials1={testimonials1} />
                            <MobileTestimonialsCards testimonials1={testimonials1} />
                        </div>
                    </div>
                </div>

                <div className='hidden lg:block lg:mt-12'>
                    <FeaturedCustomers />
                </div>
            </div>

            <div className='block lg:hidden mt-[52px] px-[27px]'>
                <div className='flex items-center'>
                    <hr className='w-full ' />
                    <p className='text-sm uppercase leading-5 tracking-[2px] text-center min-w-[240px]'> FEATURED CUSTOMERS</p>
                    <hr className='w-full' />
                </div>
                <div className='container mt-12'>
                    <div class="w-full ">
                        <ul class="flex flex-wrap gap-5 items-center justify-center md:justify-start [&_img]:max-w-none">
                            <li>
                                <img src={lush} alt="Facebook" />
                            </li>
                            <li>
                                <img src={dayAndRoss} alt="Disney" />
                            </li>
                            <li>
                                <img src={island} alt="Airbnb" />
                            </li>
                            <li>
                                <img src={mega} alt="Airbnb" />
                            </li>
                            <li>
                                <img src={fine} alt="Airbnb" />
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Testimonials