import Logo from '../assets/ominixLogo.svg'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Copyright } from 'lucide-react'
import Youtube from '../assets/Youtube.svg'
import X from '../assets/Twitter.svg'
import Facebook from '../assets/Facebook.svg'
import Insta from '../assets/u_instagram-alt.svg'

function Footer() {
  return (
    <div className='h-[100%] bg-primary text-white py-20 px-10'>
      <div className='flex gap-28'>
        <div className='w-[25%] flex flex-col gap-8'>
            <img src={Logo} alt="Logo" width={199} height={64} />
            <span className='flex flex-col gap-8'>
                <h1>Subscribe </h1>
                <p>OmniX would notify for you on useful tips and all you need to know about campaign , advertvert impression .</p>
                <Input placeholder='Enter your email address' className='rounded h-[58px]' />
                <Button className='bg-white text-primary rounded h-[58px]'>Subscribe</Button>
            </span>
        </div>
        <div className='flex justify-between w-[75%]'>
            <div>
                <h1 className='text-white text-lg font-bold'>Company</h1>
                <ul className='flex flex-col gap-8 py-10'>
                    <li>About</li>
                    <li>Career</li>
                    <li>Events</li>
                    <li>Press and News</li>
                </ul>
            </div>
            <div>
            <h1 className='text-white text-lg font-bold'>Platform</h1>
                <ul className='flex flex-col gap-8 py-10'>
                    <li>Open platform and Integration</li>
                    <li>Portfolio Management</li>
                    <li>Reporting </li>
                    <li>Pricing </li>
                </ul>
            </div>
            <div>
            <h1 className='text-white text-lg font-bold'>Resources</h1>
                <ul className='flex flex-col gap-8 py-10'>
                    <li>Podcast</li>
                    <li>Blog Post</li>
                    <li>Article</li>
                    <li>Glossary </li>
                    <li>Learning Hub </li>
                </ul>
            </div>
            <div>
            <h1 className='text-white text-lg font-bold'>Services</h1>
                <ul className='flex flex-col gap-8 py-10'>
                    <li>Customer Support</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
      </div>
      <div className='flex justify-between pt-8'>
        <div>
            <ul className='flex gap-6'>
                <li className='flex'><Copyright />Ominix 2023</li>
                <li>Terms of use</li>
                <li>Privacy</li>
                <li>Cookies</li>
            </ul>
        </div>
        <div>
        <ul className='flex gap-6'>
            <li><img src={Youtube} alt="youtube" /></li>
            <li><img src={X} alt="youtube" /></li>
            <li><img src={Insta} alt="youtube" /></li>
            <li><img src={Facebook} alt="youtube" /></li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
