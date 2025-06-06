
import featureOne from '../assest/images/feature-1.png'

// motion : npm i framer-motion;
import { motion } from 'framer-motion'

// varriants
import { fadeIn } from '../variant'

function Features() {
    return (
        <div className='px-4 mx-auto my-24 md:px-14 max-w-screen-2xl' id='feature'>
            <div className='flex flex-col items-start justify-between gap-10 lg:flex-row'>
                <div className='lg:w-1/4'>
                    <motion.div
                        variants={fadeIn('right', .2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: 0, amount: .7 }}
                    >
                        <h3 className='mb-3 text-3xl font-bold text-blue-500 lg:w-1/2'>Why we are better then Others</h3>
                        <p className='text-base text-gray-400'>Lorem ipsum adipisicing elit. odio! Rerum sit porro illum similique reiciendis odit possimus temporibus, quae hic tenetur voluptatum!</p>
                    </motion.div>
                </div>
                {/* features container */}
                <div className='w-full lg:w-3/4'>
                    <motion.div
                        variants={fadeIn('up', .2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: 0, amount: .7 }}
                    >
                        <div className='grid items-start grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2 md:gap-12'>
                            <div className='bg-[rgba(255,255,255,.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300' >
                                <div>
                                    <img src={featureOne} alt="" />
                                    <h5 className='px-5 mt-5 text-2xl font-semibold text-center text-gray-700'>Convenient Study Schedule</h5>
                                </div>
                            </div>
                            <div className='bg-[rgba(255,255,255,.04)] md:mt-16 rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300' >
                                <div>
                                    <img src={featureOne} alt="" />
                                    <h5 className='px-5 mt-5 text-2xl font-semibold text-center text-gray-700'>Convenient Study Schedule</h5>
                                </div>
                            </div>
                            <div className='bg-[rgba(255,255,255,.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300' >
                                <div>
                                    <img src={featureOne} alt="" />
                                    <h5 className='px-5 mt-5 text-2xl font-semibold text-center text-gray-700'>Convenient Study Schedule</h5>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Features
