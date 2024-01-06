import React from 'react'
import './banner.css'
import { group, mobileGroup } from '../../assets'

const Banner = () => {
	return (
		<div className='container'  id='bgImageMountan'>
			<div  className='h-[calc(100vh-6.25rem)] flex flex-col lg:flex-row justify-center  lg:justify-between  w-full'>
				{/* left  */}
				<div className='flex flex-col justify-center'>
					{/* deskttop */}
					<div className='hidden lg:block font-[900] text-xlarge leading-[4.5rem]' style={{ letterSpacing: "-1px" }}>
						<p>Modern <br /> Temp <span className='bg-gradient-to-r from-[#11B2A8] to-[#282C3F] text-transparent bg-clip-text'> Labour </span><br /> <span className='text-secondary'>Solutions</span></p>
					</div>

					{/* mobile */}
					<div className='block lg:hidden mx-auto font-[900] text-normal leading-large' style={{ letterSpacing: "-1px" }}>
						<p>Modern Temp <br /><span className='bg-gradient-to-r from-[#11B2A8] to-[#282C3F] text-transparent bg-clip-text'> Labour </span><span className='text-secondary'>Solutions</span></p>
					</div>
					<div className='mt-8 lg:mt-6 max-lg:mx-auto  flex flex-row gap-4'>
						<button className='bg-primary text-white px-8 py-4 rounded-xl font-bold'>Find Workers</button>
						<button className='bg-secondary text-white px-8 py-4 rounded-xl font-bold'>Find a Job</button>
					</div>
				</div>

				<div className='flex items-center justify-center mt-16 px-5'>
					<img src={group} alt="group image" className='hidden lg:block'/>
					<img src={mobileGroup} alt="group image"  className='block lg:hidden' />
				</div>
			</div>

		</div>
	)
}

export default Banner