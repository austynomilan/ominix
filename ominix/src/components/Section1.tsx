import Hero2 from '../assets/hero2.svg'
import { Button } from './ui/button'
type proprs = {
    headings?: string,
    description?: string,
    subHeadings: string,
    subDescriptions: string,
    subDescriptions2?: string,
    flexDirection?: 'row' | 'row-reverse';
    gap?: number;
}

function Section1({headings, description, subHeadings, subDescriptions,  flexDirection = 'row', 
    gap, subDescriptions2}: proprs) {
  return (
    <div className="w-[90%] flex flex-col justify-center items-center gap-6 m-auto mt-16 h-[80vh]">
      {headings && <h1 className="text-5xl text-[#0F172A] w-[70%] text-center font-bold">{headings}</h1>} 
      {description && <p className="text-lg w-[60%] text-center">{description}</p>}
      <div  className={`w-[100%] mt-10`}
      style={{ flexDirection, gap:`${gap}px`, display:'flex', justifyContent:'space-between', alignItems:"center" }}
      >
       <div className='w-[55%]'><img src={Hero2} alt="image" width={'80%'} /></div> 
        <div className='flex flex-col gap-6 w-[45%]'>
            {subHeadings && <h1 className="text-[40px] font-bold">{subHeadings}</h1>}
            {subDescriptions && <p className="text-2xl w-[75%]">{subDescriptions}</p>}
            {subDescriptions2 && <p className="text-2xl w-[75%] pt-4">{subDescriptions2}</p>}
            <Button className='text-white bg-primary rounded  font-bold w-[199px] h-[40px]'>
                Request Demo
            </Button>
        </div>
      </div>
    </div>
  )
}

export default Section1
