import Logo from '../assets/ominixLogo.svg'
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
function Nav() {
  return (
    <div className="w-[100%] h-[96px] bg-primary flex items-center justify-between px-10">
      <div className=''><img src={Logo} alt="Logo" height={64} width={199}/></div>
      <div className=''>
        <ul className='flex text-white items-center gap-6'>
            <li>Home</li>
            <li>Why Omini X</li>
            <li><span className='flex items-center gap-1'>Soluton <ChevronDown /></span></li>
            <li>Pricing</li>
            <li><span className='flex items-center gap-1'>More <ChevronDown /></span></li>
        </ul>
      </div>
      <div className='flex items-center text-xs gap-10'>
        <h1 className='font-bold text-white'>Log-   in</h1>
        <Button className='text-primary bg-white font-bold w-[199px] h-[40px] rounded'>
            Get Started
        </Button>
      </div>
    </div>
  )
}

export default Nav
