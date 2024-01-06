import React from 'react'

const TestimonialsCard = ({testimonials1}) => {
  return (
	<>
				<div className='flex items-center mx-auto rounded-lg gap-4 px-10 py-10 bg-white max-w-[1000px]'>
					<div>
						<p className='text-xl leading-9 '>Excellent App! Best in Langley for temp labour! They provide 24/7 support, call them and get your labour right away. Also, they pay their labour same day! With Grizzly Force you will have efficient labour and better control!</p>
						<p className='text-[28px] leading-10 font-bold mt-10'>Tony Hartzenberg</p>
						<p className='text-lg leading-6 mt-3'>CEO, Sugarplum</p>
					</div>
					<div className=''>
						<img src={testimonials1} alt="Mountan" className='max-w-[168px]' />
					</div>
				</div>
	</>
  )
}

export default TestimonialsCard