import React from 'react'
import FloatingLabelInput from '../../utils/FloatingLabelInput';
import "./footer.css"
import { appstore, facebook, github, instagram, logo, playstore, twitter, facebookMobile,githubMobile,instagramMobile,twitterMobile } from '../../assets';
import { footerLinks } from '../../constents/footer';


const Footer = () => {
    return (
        <div className="max-lg:bg-primary max-lg:bg-[url('./assets/Mobile/bg.svg')] bg-no-repeat">
            <div className='container px-9 max-lg:pt-[51px]'>
                <p className='max-lg:text-white font-bold text-normal lg:text-large leading-large lg:leading-xlarge tracking-[-1px] lg:text-center'>Subscribe to our <span className='text-secondary'>Newsletter</span></p>
                <p className='max-lg:text-white text-md max-lg:uppercase lg:text-lg leading-5 lg:leading-7 lg:text-center mt-6 lg:mt-3 tracking-[2px]'>Keep up with the Grizzly Force team!</p>

                <div className='my-8 lg:my-10 flex flex-col lg:flex-row justify-center lg:items-center gap-5 lg:gap-4'>
                    <FloatingLabelInput label="Email Address" />
                    <div>
                        <button className='py-4 px-8 bg-secondary rounded-xl text-md text-white font-bold'>Submit</button>
                    </div>
                </div>

                <div className='hidden lg:block py-[6.25rem]'>
                    <div className='grid grid-cols-5 gap-[3rem]'>
                        <div className='col-span-2'>
                            <div>
                                <img src={logo} alt="logo" className='mr-8 ml-4 h-[2.25rem] lg:h-[3rem] lg:ml-0' />
                                <p className=' text-lg leading-7 mt-3'>Grizzly is a private virtual network that has unique features and has high security.</p>
                                <div className='flex mt-10 gap-4'>
                                    <img src={playstore} alt="" className='h-[2.875rem]' />
                                    <img src={appstore} alt="" className='h-[2.875rem]' />
                                </div>
                            </div>
                        </div>

                        {
                            footerLinks.map((link) => {
                                return (
                                    <div className='col-span-1'>
                                        <p>{link["data"]}</p>
                                        <ul className='text-md leading-4 space-y-4 mt-[1.625rem]'>
                                            {link["dataList"].map((elm) => {
                                                return (
                                                    <>
                                                        <li>{elm}</li>
                                                    </>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

                <div className='flex justify-between items-center pb-14 lg:pb-[6.25rem] max-lg:mt-[72px]'>
                    <p className='text-white lg:text-primary text-[10px] lg:text-lg leading-7'>
                        © 2022 Grizzly, Inc. All rights reserved
                    </p>
                    
                    <div className='hidden lg:flex gap-12'>
                        <img src={facebook} alt=""  className='h-6 w-6'/>
                        <img src={twitter} alt="" className='h-6 w-6'/>
                        <img src={instagram} alt="" className='h-6 w-6'/>
                        <img src={github} alt="" className='h-6 w-6'/>
                    </div>

                    <div className='flex gap-4  lg:hidden'>
                        <img src={facebookMobile} alt=""  className='h-4 w-4 '/>
                        <img src={twitterMobile} alt="" className='h-4 w-4'/>
                        <img src={instagramMobile} alt="" className='h-4 w-4'/>
                        <img src={githubMobile} alt="" className='h-4 w-4'/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer