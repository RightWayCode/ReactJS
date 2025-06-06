import aboutImgOne from '../assest/images/about-2.svg'
import aboutImgTwo from '../assest/images/about-1.svg'


// motion : npm i framer-motion;
import { motion } from 'framer-motion'

// varriants
import { fadeIn } from '../variant'
function About() {
  return (
    <div className='p-4 mx-auto space-y-10 max-w-screen-2xl md:px-14' id='About'>
      <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
        <div className="md:w-1/2">
          <motion.div
            variants={fadeIn('down', .2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: 0, amount: .7 }}
          >
            <img src={aboutImgOne} alt="" />
          </motion.div>
        </div>

        {/* about content */}
        <div className='md:w-2/5'>
          <motion.div
          variants={fadeIn('up', .2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: 0, amount: .7 }}
          >
            <h2 className='mb-5 text-3xl font-bold leading-normal text-blue-900 md:text-5xl'>
              We have been improving our product <span className='text-purple-500'>for many years.</span>
            </h2>
            <p className='text-lg text-gray-500 mb-7'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, facere! Ab, consectetur. Lorem, ipsum dolor.
            </p>
            <button className='btnPrimary'>Get Started</button>
          </motion.div>
        </div>
      </div>

      {/* second part */}
      <div className='flex flex-col items-center justify-between gap-8 md:flex-row-reverse'>
        <div className="md:w-1/2">
          <motion.div
          
          variants={fadeIn('right', .2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: 0, amount: .7 }}
          >
          <img src={aboutImgTwo} alt="" />
          </motion.div>
        </div>

        <div className='md:w-2/5'>
          <motion.div
          variants={fadeIn('up', .2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: 0, amount: .7 }}
          >
            <h2 className='mb-5 text-3xl font-bold leading-normal text-blue-900 md:text-5xl'>
              We have been improving our product <span className='text-purple-500'>for many years.</span>
            </h2>
            <p className='text-lg text-gray-500 mb-7'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, facere! Ab, consectetur. Lorem, ipsum dolor.
            </p>
            <button className='btnPrimary'>Get Started</button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
