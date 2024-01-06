import React from 'react'
import { jobSeekerImg, empDesign, rightArrow, tick, jobSeekerMobileImg } from '../../assets'
const Jobseekers = () => {
  return (
	<div className='container py-14 lg:py-[6.25rem]'>
			<div className='flex flex-col lg:flex-row justify-center items-center  lg:justify-between  w-full'>

				{/* right  */}
				<div className='flex flex-col mx-auto justify-center  max-w-[433px] max-lg:mx-4'>
					<p className='uppercase text-md leading-5 tracking-[2px]'>For Job Seekers</p>

					{/* deskttop */}
					<div className='block font-[900] text-normal lg:text-large leading-large lg:leading-xlarge mt-6' style={{ letterSpacing: "-1px" }}>
						<p>Connecting You <br /> With<span className='text-secondary'> Flexible Work</span></p>
					</div>


					<div className='hidden lg:block text-start mt-8'>
						<img src={empDesign} alt="" srcset="" className='h-[2.75rem]' />
					</div>

					<ul className='space-y-[14px] mt-5'>
						<li className='flex gap-3 text-lg leading-7'><span><img src={tick} alt="tick" /></span>User friendly mobile app</li>
						<li className='flex gap-3 text-lg leading-7'><span><img src={tick} alt="tick" /></span>New jobs<span className='font-bold'>everyday</span></li>
						<li className='flex gap-3 text-lg leading-7'><span><img src={tick} alt="tick" /></span>Payout in <span className='font-bold'>24hrs</span></li>
						<li className='flex gap-3 text-lg leading-7'><span><img src={tick} alt="tick" /></span>Employment benefits</li>
						<li className='flex gap-3 text-lg leading-7'><span><img src={tick} alt="tick" /></span>Temporary & permanent positions</li>
					</ul>

					<div className='flex gap-7 mt-10 min-h-[3.75rem] max-w-[9.375rem] items-center border-b-2 border-secondary '>
						<p className='font-bold text-md leading-6'>Learn More</p>
						<img src={rightArrow} alt="Arrow" className='h-6 w-6' />
					</div>
				</div>

				<div className='flex mx-auto justify-center  max-lg: mt-8'>
					<img src={jobSeekerImg} alt="group image" className='h-auto w-auto hidden lg:block' />
					<img src={jobSeekerMobileImg} alt="group image" className='h-auto w-auto block lg:hidden' />
				</div>

			</div>

		</div>
  )
}

export default Jobseekers