import React, { useState } from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5";

// motion : npm i framer-motion;
import { motion } from 'framer-motion'
// varriants
import { fadeIn } from '../variant'

function Pricing() {
    const [isYearly, setIsYearly] = useState(false)
    const packages = [
        { name: "start", monthlyPrice: 19, yearlyPrice: 199, discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quae ipsam incidunt?" },
        { name: "Advanced", monthlyPrice: 39, yearlyPrice: 399, discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quae ipsam incidunt?" },
        { name: "Advanced", monthlyPrice: 59, yearlyPrice: 599, discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quae ipsam incidunt?" }
    ]
    return (
        <div className='p-4 py-10 mx-auto max-w-screen-2xl md:px-14' id='pricing'>

            <div className='text-center'>
                <h2 className='mb-2 text-3xl font-extrabold text-blue-900 md:text-5xl'>
                    Here are all our plans
                </h2>
                <p className='px-4 mx-auto text-gray-500 md:w-1/3'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, facere! Ab, consectetur. Lorem, ipsum dolor.
                </p>
                {/* toggle pricing */}
                <div className='mt-16'>
                    <label htmlFor="toggle" className='inline-flex items-center cursor-pointer'>
                        <span className='mr-8 text-2xl font-semibold'>Monthly</span>
                        <div className='h-6 transition duration-300 ease-in-out bg-gray-300 rounded-full w-14'>
                            <div className={`w-6 h-6 rounded-full ${isYearly ? "bg-blue-500 ml-8" : "bg-purple-500"}`}></div>
                        </div>
                        <span className='ml-8 text-2xl font-semibold'>Yearly</span>
                    </label>
                    <input type="checkbox" id='toggle' className='hidden' checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
                </div>
            </div>

            {/* Pricing Card */}
            <div className='grid gap-10 mx-auto mt-20 lg:grid-cols-3 sm:grid-cols-2 md:w-11/12'>
                {
                    packages.map((pkg, index) =>
                    (
                        <motion.div
                            variants={fadeIn('up', .2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: 0, amount: .7 }}
                        >
                            <div key={index} className='px-4 py-10 border rounded-lg md:px-6 shadow-3xl'>
                                <h3 className='text-3xl font-bold text-center text-blue-900'>{pkg.name}</h3>
                                <p className='my-5 text-center text-gray-500'>{pkg.discription}</p>
                                <p className='mt-5 text-4xl font-bold text-center text-purple-400'>
                                    ${isYearly ? `${pkg.yearlyPrice}` : `${pkg.monthlyPrice}`} <span className='text-base font-medium text-stone-600'>/{isYearly ? "Year" : "Month"}</span>
                                </p>
                                <ul className='px-4 mt-4 space-y-2'>
                                    <li className='flex items-center gap-3'><IoCheckmarkCircleSharp className='w-5 h-5 text-green-500' /> Videos of Lessons</li>
                                    <li className='flex items-center gap-3'><IoCheckmarkCircleSharp className='w-5 h-5 text-green-500' /> Videos of Lessons</li>
                                    <li className='flex items-center gap-3'><IoCheckmarkCircleSharp className='w-5 h-5 text-green-500' /> Videos of Lessons</li>
                                    <li className='flex items-center gap-3'><IoCheckmarkCircleSharp className='w-5 h-5 text-green-500' /> Videos of Lessons</li>
                                    <li className='flex items-center gap-3'><IoCheckmarkCircleSharp className='w-5 h-5 text-green-500' /> Videos of Lessons</li>
                                </ul>
                                <div className='flex items-center justify-center w-full mx-auto mt-8'>
                                    <button className='btnPrimary'>Get Started</button>
                                </div>
                            </div>
                        </motion.div>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Pricing
