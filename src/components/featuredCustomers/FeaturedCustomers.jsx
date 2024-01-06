import React from 'react'
import { dayAndRoss, fine, island, lush, mega } from '../../assets'
import "./FeaturedCustomers.css"

const FeaturedCustomers = () => {
	return (
		<>
			<div className='flex items-center'>
				<hr className='w-full ' />
				<p className='text-sm uppercase leading-5 tracking-[2px] text-center min-w-[240px]'> FEATURED CUSTOMERS</p>
				<hr className='w-full' />
			</div>
			<div className='container mt-12'>
				<div className='grid grid-flow-col' id='feature'>
					<div>
						<img src={lush} alt="" />
					</div>
					<div>
						<img src={dayAndRoss} alt="" />
					</div>
					<div>
						<img src={island} alt="" />
					</div>
					<div>
						<img src={mega} alt="" />
					</div>
					<div>
						<img src={fine} alt="" />
					</div>
				</div>
			</div>

		</>
	)
}

export default FeaturedCustomers