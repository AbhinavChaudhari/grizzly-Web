import React from 'react'

const MobileTestimonialsCards = ({testimonials1}) => {
	return (
		<>
			
			<div className="flex items-center justify-center mt-20">
				{/* Card */}
				<div className='relative'>
						<div className='absolute py-4 left-1/3 -top-1/4 bg-white rounded-full w-24 shadow-md'>
							<img src={testimonials1} alt="" className='h-[3.75rem] mx-auto '/>
						</div>
					<div className="bg-white rounded-lg px-6 py-10 shadow-md w-[17.5rem] ">
						<p className="text-lg leading-6 mb-4 text-justify">Excellent App! Best in Langley for temp labour! They provide 24/7 support, call them and get your labour right away. </p>
						<h2 className="font-bold text-xl leading-8">Tony Hartzenberg</h2>
						<p className="text-sm leading-4">CEO, Sugarplum</p>
					</div>

				</div>
			</div>
		</>
	)
}

export default MobileTestimonialsCards