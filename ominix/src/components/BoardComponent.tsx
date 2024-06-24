import { Button } from "./ui/button"
import Elips from '../assets/Ellipse41.svg'

type Props = {
    heading: string,
    description: string,
    dashboardImage: string,
}

function BoardComponent({heading, description, dashboardImage}: Props) {
  return (
    <div className="h-[96vh] flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <img src={Elips} alt="elips" />
           <span>
         {heading && <h1 className="text-[#0F172A] font-extrabold text-5xl">{heading}</h1>}
        {description && <h2 className="text-lg">{description}</h2>} 
        </span> 
        </div>
        <Button className="bg-[#1D1D62] text-white font-bold rounded text-xs w-[199px] h-[40px]">Use Now</Button>
      </div>
      <div className="flex justify-between">
        <div className="flex">
        <img src={Elips} alt="elips" height={86}  width={86}/>
        {dashboardImage && <img src={dashboardImage} alt="image" />}
        <img src={Elips} alt="elips" height={86}  width={86}/> 
        </div>
        <div >
            <ul>
                <li>
                    <span>
                        <h1 className="text-lg text-[#363636] font-bold">Categories:</h1>
                        <p className="italic text-lg">Customer Success</p>
                    </span>
                </li>
                <li>
                <span>
                        <h1 className="text-lg text-[#363636] font-bold">Publisher:</h1>
                        <p className="italic text-lg">Omini-X</p>
                    </span>
                </li>
                <li>
                <span>
                        <h1 className="text-lg text-[#363636] font-bold">Last Updated:</h1>
                        <p className="italic text-lg">November 8, 2022</p>
                    </span>
                </li>
                <li>
                <span>
                        <h1 className="text-lg text-[#363636] font-bold">Data Security & Privacy:</h1>
                        <p className="italic text-lg">Privacy Policy</p>
                    </span>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default BoardComponent
