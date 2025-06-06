import React from 'react'

// motion : npm i framer-motion;
import { motion } from 'framer-motion'

// varriants
import { fadeIn } from '../variant'
function Banner({ banner, heading, subHeading, btn1, btn2 }) {
    return (
        <div>
            <div className='gradientBg rounded-xl rounded-br-[110px] md:p-9 px-4 py-9 '>
                <div className='flex flex-col items-center justify-between gap-12 md:flex-row-reverse'>

                    {/*b Image */}
                    <motion.div
                        variants={fadeIn('down', .2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: 0, amount: .7 }}
                    >
                        <div>
                            <img src={banner} alt="" className='lg:h-[386px]' />
                        </div>
                    </motion.div>
                    {/* banner content */}
                    <div className='md:w-3/5'>
                        <motion.div
                            variants={fadeIn('up', .2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: 0, amount: .7 }}
                        >
                            <h2 className='mb-6 text-4xl font-bold leading-relaxed text-white md:text-7xl'>{heading}  </h2>
                            <p className='mb-8 text-2xl text-gray-400'>{subHeading}</p>
                            <div className='space-x-5 space-y-4'>
                                <button className='btnPrimary'>{btn1}</button>
                                <button className='btnPrimary'>{btn2}</button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
