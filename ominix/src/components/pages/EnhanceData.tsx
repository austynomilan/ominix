import Faq from "../Faq"
import Footer from "../Footer"
import Heros from "../Heros"
import Nav from "../Nav"
import Partners from "../Partners"
import Section1 from "../Section1"
import Slider from "../Slider"
import herosImg from '../../assets/herosImage.png'

function EnhanceData() {
  return (
    <div>
      <div className="w-[100%] h-screen">
      <Nav />
      <div className="w-[100%] h-screen overflow-y-auto">
        <Heros 
        src={herosImg} 
        heading="customer data"
        span1="Enhance"
        span2="visibility"
        description="Streamline marketing efforts, saving time and resources, and gaining a comprehensive view of campaigns."
        />
      </div>
      <div>
        <Partners />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        headings="A one-stop Conversion Solution for every business platform."
        description="Help clients track Campaign performance, meet targets and measure their level of success and adapt strategies based on real-time insights."
        subHeadings="Unified Campaign Management"
        subDescriptions="Create, manage, and optimize digital marketing campaigns across various platforms from a single user dashboard."
        gap={30}
        flexDirection="row"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Simplified User Experience"
        subDescriptions="Provides an intuitive and user-friendly interface for users to easily navigate the system, create campaigns and access meaningful insights for informed decision-making."
        gap={30}
        flexDirection="row-reverse"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Seamless Cross-Platform Campaign Deployment"
        subDescriptions="Implement tools and software that automate repetitive tasks, streamline processes, and improve efficiency."
        gap={30}
        flexDirection="row"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Enhanced Conversion Rates"
        subDescriptions="Empower digital marketers and clients to achieve high conversion rates for their advertising campaigns using optimization tools and insights to increase conversion rates and a higher return on investment for marketing activities."
        gap={30}
        flexDirection="row-reverse"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Comprehensive Data Integration and Analytics"
        subDescriptions="Provide robust data integration capabilities, enabling clients to collect and analyze campaign data from various platforms in one place by using advanced analytics and reporting tool to make it easier to track campaign performance and adapt strategies based on real-time insights."
        subDescriptions2='"OmniX offers a unified approach that helps us simplify campaign deployment and reduce the potential for errors and inconsistencies in messaging."'
        gap={30}
        flexDirection="row"
        />
      </div>
      <div>
        <Slider />
      </div>
      <div className="w-[100%]">
         <Faq />
      </div>
      <div className="h-[80vh]">
        <Footer />
      </div>
    </div>
    </div>
  )
}

export default EnhanceData
