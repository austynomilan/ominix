import partner1 from '../assets/partner1.svg'
import partner2 from '../assets/partner2.svg'
import partner3 from '../assets/partner3.svg'
import partner4 from '../assets/partner4.svg'
import partner5 from '../assets/partner5.svg'

const partnerList = [
    {index: 0, logo: partner1},
    {index: 1, logo: partner2},
    {index: 2, logo: partner3},
    {index: 3, logo: partner4},
    {index: 4, logo: partner5},
    {index: 5, logo: partner4},
    {index: 6, logo: partner5},
    {index: 7, logo: partner1},
    {index: 8, logo: partner2},
];

function Partners() {
  return (
    <div className='w-[100%] m-auto border-b-2'>
      <h1 className='text-2xl font-bold text-[#232323] text-center'>Trusted by teams from leading companies</h1>
      <div className='w-[60%] flex m-auto gap-6 flex-wrap justify-center mt-10 pb-10'>
        {partnerList.map((partner, index) => {
            return (
                <div key={index} className='shrink-0'>
                    <img src={partner.logo} alt="logo" />
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Partners
