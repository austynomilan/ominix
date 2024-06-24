import { Button } from "./ui/button"

type props = {
    src: string,
    description: string,
    heading: string 
    span1: string,
    span2: string,
}

function Heros({src, description, heading, span1, span2}: props) {
  return (
    <div className="flex w-[100%] items-center bg-[#FAFAFA] px-10 h-[95vh] border-b-2">
      <div className="w-[50%] flex flex-col gap-6">
        {heading &&  <h1 className="text-[64px] font-bold text-[#363636] w-[85%]">{span1 && <span className="text-primary">{span1}</span>} {heading} {span2 && <span className="text-primary">{span2}</span>}</h1>}
       
       {description && <p className="w-[70%]">{description}</p>}
        
        <div className="flex gap-6">
            <Button className="text-[white] text-xs font-bold w-[199px] h-[40px] rounded">Request Demo</Button>
            <Button className="bg-white text-primary text-xs font-bold w-[199px] h-[40px] rounded border-2 border-primary">Watch Video</Button>
        </div>
      </div>
      <div className="w-[50%]">
        {src && <img src={src} alt="image" width={'80%'} />}
      </div>
    </div>
  )
}

export default Heros
