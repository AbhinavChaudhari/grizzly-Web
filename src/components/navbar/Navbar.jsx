import React from 'react'
import { logo, burger } from '../../assets'

const Navbar = () => {
    return (

        <nav className='w-full lg:border lg:border-b-2 lg:border-borderColor'>
            <div className='h-[100px] flex items-center container mx-auto'>
                {/* left side  */}
                <div>
                    <img src={logo} alt="logo" className='mr-8 ml-4 h-[2.25rem] lg:h-[3rem] lg:ml-0'/>
                </div>
                <ul className='border-l border-primary pl-8 list-none hidden lg:flex flex-col lg:flex-row lg:space-x-7 '>
                    <li>Find Workers</li>
                    <li>Find Jobs</li>
                    <li>About Us</li>
                    <li>Resources</li>
                    <li>Contact</li>
                </ul>

                {/* right side  */}
                <div className='hidden lg:flex items-center ml-auto gap-6' >
                    <p>Login</p>
                    <button className='px-6 py-4 border rounded-xl font-[950]'>Open an account</button>
                </div>

                <div className='flex ml-auto lg:hidden mr-4'>
                    <img src={burger} alt="" srcset="" />

                </div>
            </div>

        </nav>



    )
}

export default Navbar