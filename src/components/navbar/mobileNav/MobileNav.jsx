import React from 'react'
import { cross } from '../../../assets'

const MobileNav = ({isMobileMenuOpen, setMobileMenuOpen}) => {
  return (
	<div>
		<div>
		 {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
			<div className='w-full py-10 px-10'>
				<img src={cross} alt="" className='ml-auto' onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}/>
			</div>
          {/* Your mobile navigation links go here */}
          <ul className="flex flex-col items-center pt-12 gap-6">
            <li className="mb-4">
              <a href="#" className="text-xl">Find Workers</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-xl">Find Jobs</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-xl">About Us</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-xl">Resources</a>
            </li>
			<li className="mb-4">
              <a href="#" className="text-xl">Contact</a>
            </li>
			<li className="mb-4">
              <a href="#" className="text-xl">Login</a>
            </li>
          </ul>
		  <div className='w-full text-center mt-6'>
			<button className='py-4 px-6 border-2 border-primary rounded-xl font-bold'>Open an account</button>
		  </div>
        </div>
      )}
	</div>
	</div>
  )
}

export default MobileNav