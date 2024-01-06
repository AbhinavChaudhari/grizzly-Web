import React from 'react'
import { servingImgs } from '../../constents/servingImg'

const Gallery = () => {
	return (
		<>
			<div className='container w-full h-full mt-12'>

				<div className='w-full h-full overflow-y-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide' id='slider'>
					<div className='relative grid grid-flow-col items-center animate-infinite-scroll' >
						{servingImgs.map((item, index) => (
							<div key={index} className='relative w-[220px] px-3 inline-block cursor-pointer hover:scale-125 ease-in-out duration-300'>
								<img src={item.img} alt="" className='max-w-full max-h-full' />
								<p className='absolute z-10 bottom-3 left-6 text-white font-bold'>{item.title}</p>
							</div>
						))}
					</div>
					
				</div>

			</div>



		</>
	)
}

export default Gallery