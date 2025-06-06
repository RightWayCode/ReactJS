import newsBanner from '../assest/images/banner.webp'
import Banner from '../Component/Banner'
function NewsLetter() {
    return (
        <div className='p-4 mx-auto my-12 md:px-14 max-w-screen-2xl'>
            <Banner banner={newsBanner} heading='Hey There! Welcome To  Developing World ' subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione natus veritatis eos sint. Lorem ipsum dolor sit amet consectetur." btn1="I have a code" btn2="" />
        </div>
    )
}

export default NewsLetter
