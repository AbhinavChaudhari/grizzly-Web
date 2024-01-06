import React from 'react'
import { emp, empDesign, rightArrow, tick } from '../../assets'


const Employee = () => {
	return (
		<div className='container py-[52px] lg:py-[6.25rem]'>
			<div className='flex flex-col-reverse lg:flex-row justify-center items-center  lg:justify-between  w-full'>

				<div className='flex items-center justify-center  max-lg: mt-8'>
					<img src={emp} alt="group image" className='h-auto w-auto' />
				</div>

				{/* right  */}
				<div className='flex flex-col justify-center  max-w-[433px] max-lg:px-9'>
					<p className='uppercase text-md leading-5 tracking-[2px]'>for employee</p>

					{/* deskttop */}
					<div className='block font-[900] text-normal lg:text-large leading-large lg:leading-xlarge mt-5' style={{ letterSpacing: "-1px" }}>
						<p><span className='text-secondary'>Workforce</span> <br className='block lg:hidden'/> At Your Fingertips</p>
					</div>


					<div className='hidden lg:block text-start mt-5'>
						<img src={empDesign} alt="" srcset="" className='h-[2.75rem]' />
					</div>

					<ul className='space-y-5 mt-5'>
						<li className='flex gap-3 text-lg leading-7'><span><img src={tick} alt="tick" /></span>Easy to use mobile & web platform</li>
						<li className='flex gap-3 text-lg leading-7'><span><img src={tick} alt="tick" /></span><span className='font-bold'>45000+</span> workers</li>
						<li className='flex gap-3 text-lg leading-7'><span><img src={tick} alt="tick" /></span>Realtime <span className='font-bold'>tracking</span></li>
						<li className='flex gap-3 text-lg leading-7'><span><img src={tick} alt="tick" /></span> <span className='font-bold'>95% </span>fulfillment rate</li>
						<li className='flex gap-3 text-lg leading-7'><span><img src={tick} alt="tick" /></span>Preferred worker list</li>
					</ul>

					<div className='flex gap-7 mt-10 min-h-[3.75rem] max-w-[9.375rem] items-center border-b-2 border-secondary '>
						<p className='font-bold text-md leading-6'>Learn More</p>
						<img src={rightArrow} alt="Arrow" className='h-6 w-6' />
					</div>
				</div>

			</div>

		</div>
	)
}

export default Employee