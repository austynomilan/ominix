import Logo from '../assets/ominixLogo.svg'
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
function Nav() {
  return (
    <div className="w-[100%] h-[96px] bg-primary flex items-center justify-between px-10">
      <div className=''><img src={Logo} alt="Logo" height={64} width={199}/></div>
      <div>
        <Menubar className='border-0'>
          <ul className='flex text-white items-center gap-6'>
            <li>Home</li>
            <li>Why Omini X</li>
            <li>
              <MenubarMenu>
                 <MenubarTrigger className='flex items-center gap-1'>Soluton <ChevronDown /></MenubarTrigger>
                 <MenubarContent className='bg-white w-[130%] h-[335px] rounded-xl flex justify-between p-8'>
                  <span>
                    <h1 className='font-bold'>Solution</h1>
                    <ul className='flex flex-col gap-3 border-b py-4'>
                      <li>Integrations</li>
                      <li>Customer Engagement</li>
                      <li>Reporting</li>
                      <li>Portfolio management</li>
                    </ul>
                  </span>
                  <span>
                    <h1 className='font-bold'>Business Outcomes</h1>
                    <ul className='flex flex-col gap-3 border-b py-4'>
                      <li>Prvent Churn</li>
                      <li>Increase revenue growth</li>
                      <li>Boost team efficiency</li>
                      <li>Enhance data visibility</li>
                      <li>Build Customer Loyalty</li>
                      <li>Improve customer health</li>
                    </ul>
                  </span>
                  <span className='border-b pb-4'>
                    <h1 className='font-bold'>Solution</h1>
                    <ul className='flex flex-col gap-3 py-4'>
                      <li>Manage onboarding Project</li>
                      <li>Manage contract renewals</li>
                      <li>Monitor customer health</li>
                      <li>Drive product adoption</li>
                      <li>Detect risk</li>
                    </ul>
                    <h2 className='font-bold text-lg text-primary'>What is Omini-X?</h2>
                  </span>
                 </MenubarContent>
              </MenubarMenu>
              </li>
            <li>Pricing</li>
            <li>
              <MenubarMenu>
                <MenubarTrigger className='flex items-center gap-1'>More <ChevronDown /></MenubarTrigger>
                <MenubarContent className='bg-white w-[35%] h-[205px] rounded-xl flex justify-between p-5'>
                  <ul className='flex flex-col gap-2'>
                    <li>Blog</li>
                    <li>Case studies</li>
                    <li>User Studies</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                  </ul>
                </MenubarContent>
              </MenubarMenu>
              </li>
        </ul>
        </Menubar>
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
