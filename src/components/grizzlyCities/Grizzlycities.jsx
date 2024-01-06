import React from 'react'
import { mapImage, upArrow } from '../../assets'
import "./Grizzly.css"

const Grizzlycities = () => {
  return (
	<div>
		<div className='h-3 bg-[#F5F8FF]'></div>
		<div className='container py-14 lg:py-[6.25rem] '>
			<div className='flex flex-col lg:flex-row justify-center items-center  lg:justify-between  w-full gap-8 lg:gap-16'>

				{/* right  */}
				<div className='flex flex-col lg:mx-auto justify-center w-full mx-4  px-9 lg:px-0'>
					<p className='text-md leading-5 tracking-[2px]'>Grizzly Force Cities</p>
					<p className='font-bold mt-6 text-normal lg:text-large leading-large lg:leading-xlarge tracking-[-1px]'>Serving  <span className='text-secondary '>the Greater Vancouver, Victoria, Okanagan, Calgary & Toronto </span>areas</p>
				</div>

				<div className='flex mx-auto justify-center w-full  max-lg: mt-8'>
					<img src={mapImage} alt="group image" className='h-auto w-full' />
				</div>

			</div>

			<div className='flex flex-col lg:flex-row gap-5 lg:gap-8 justify-center lg:mt-[6.25rem] px-9 mt-8'>

				<div className='px-6 py-4 lg:p-10 bg-primary rounded-[20px] w-full buttonBg'>
					<p className='text-white font-bold text-lg lg:text-[2rem] leading-8 lg:leading-10'>Looking for additional help?</p>
					<p className='text-xs lg:text-lg leading-6 mt-1 font-bold text-secondary flex items-center gap-3'>Find Workers <img src={upArrow} alt="" className='h-3 w-3' /></p>
				</div>
				<div className='px-6 py-4 lg:p-10 bg-secondary rounded-[20px] w-full buttonBg2'>
					<p className='text-white font-bold text-lg lg:text-[2rem] leading-8 lg:leading-10 lg:text-end'>Looking for extra cash?</p>
					<p className='text-xs lg:text-lg leading-6 mt-1 font-bold text-white flex items-center lg:justify-end gap-3'>Find a Job <img src={upArrow} alt="" className='h-3 w-3 text-white' /></p>
				</div>
			</div>

		</div>
	</div>
  )
}

export default Grizzlycities