import React from 'react'
import { group, mobileGroup } from '../../assets'

const Banner = () => {
	// style={{ height: 'calc(100vh - 6.25rem)' }}
	return (
		<div className='container'  id='bgImageMountan'>
			<div  className='lg:flex lg:justify-between lg:h-[calc(100vh-6.25rem)]'>
				{/* left  */}
				<div className='h-full flex flex-col justify-center'>
					{/* deskttop */}
					<div className='hidden lg:block font-[900] text-[3.75rem] leading-[72px]' style={{ letterSpacing: "-1px" }}>
						<p>Modern <br /> Temp <span className='bg-gradient-to-r from-[#11B2A8] to-[#282C3F] text-transparent bg-clip-text'> Labour </span><br /> <span className='text-secondary'>Solutions</span></p>
					</div>

					{/* mobile */}
					<div className='block lg:hidden mx-auto font-[900] text-[2.5rem] leading-[52px]' style={{ letterSpacing: "-1px" }}>
						<p>Modern Temp <br /><span className='bg-gradient-to-r from-[#11B2A8] to-[#282C3F] text-transparent bg-clip-text'> Labour </span><span className='text-secondary'>Solutions</span></p>
					</div>
					<div className='mt-6 max-lg:mx-auto '>
						<button className='bg-primary text-white px-8 py-4 rounded-xl font-bold'>Find Workers</button>
						<button className='bg-secondary text-white px-8 py-4 rounded-xl font-bold ml-5'>Find a Job</button>
					</div>
				</div>

				<div className='flex items-center justify-center max-lg:mx-5 max-lg: mt-5'>
					<img src={group} alt="group image" className='hidden lg:block'/>
					<img src={mobileGroup} alt="group image"  className='block lg:hidden' />
				</div>
			</div>

		</div>
	)
}

export default Banner