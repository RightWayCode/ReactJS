import logo from '../assest/icons/logo.svg'

function Footer() {
    return (
        <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl text-white mx-auto">
            <div className="flex flex-col gap-10 my-12 md:flex-row">
                <div className="space-y-8 md:w-1/2">
                    <a href="/" className="flex items-center space-x-3 text-2xl font-semibold text-blue-900">
                        <img src={logo} className='items-center inline-block w-10' alt="" />
                        <span className='text-white'>XYZ</span>
                    </a>
                    <p className='md:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit, eaque, ad impedit porro quos maxime consequatur expedita non ab laborum</p>
                    <div>
                        <input type="email" name="email" id="email_asho" placeholder='Your Email' className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none' />
                        <input type="button" value="Subscribe" className='px-4 py-2 -ml-2 transition-all duration-300 bg-purple-500 rounded-md cursor-pointer hover:bg-white hover:text-blue-900' id="subscribe_btn_ahso" />
                    </div>
                </div>

                {/* footer navigation */}
                <div className='flex flex-col flex-wrap items-start justify-between gap-8 md:w-1/2 md:flex-row'>
                    <div className='mt-5 space-y-4'>
                        <h4 className='text-xl'>PlatForm</h4>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-300'>Overview</a>
                            <a href="/" className='block hover:text-gray-300'>Feature</a>
                            <a href="/" className='block hover:text-gray-300'>About</a>
                            <a href="/" className='block hover:text-gray-300'>Pricing</a>
                        </ul>
                    </div>
                    <div className='mt-5 space-y-4'>
                        <h4 className='text-xl'>Help</h4>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-300'>How does it works?</a>
                            <a href="/" className='block hover:text-gray-300'>Where to ask question?</a>
                            <a href="/" className='block hover:text-gray-300'>How to play?</a>
                            <a href="/" className='block hover:text-gray-300'>What is needed for this?</a>
                        </ul>
                    </div>
                    <div className='mt-5 space-y-4'>
                        <h4 className='text-xl'>Contacts</h4>
                        <ul className='space-y-3'>
                            <p className='hover:text-gray-300'>(+91) 80283 38208</p>
                            <p className='hover:text-gray-300'>123 xyz xyz</p>
                            <p className='hover:text-gray-300'> aslf al fal fa</p>
                            <p className='hover:text-gray-300'>223334</p>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />
            <div className='flex flex-col justify-between gap-8 my-8 sm:flex-row sm:items-center'>
                <p>@ XYZ 20XX - 20XX. All rights reserved.</p>
                <div className='flex items-start space-x-5'>
                    <img src={logo} className='w-8 transition-all duration-300 cursor-pointer hover:translate-y-4' alt="" />
                    <img src={logo} className='w-8 transition-all duration-300 cursor-pointer hover:translate-y-4' alt="" />
                    <img src={logo} className='w-8 transition-all duration-300 cursor-pointer hover:translate-y-4' alt="" />
                    <img src={logo} className='w-8 transition-all duration-300 cursor-pointer hover:translate-y-4' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
