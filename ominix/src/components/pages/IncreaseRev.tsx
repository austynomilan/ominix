import Heros from "../Heros"
import Nav from "../Nav"
import herosImg from '../../assets/herosImage.png'
import Partners from "../Partners"
import Section1 from "../Section1"
import Slider from "../Slider"
import Footer from "../Footer"
import Faq from "../Faq"


function IncreaseRev() {
  return (
    <div className="w-[100%] h-screen">
      <Nav />
      <div className="w-[100%] h-screen overflow-y-auto">
        <Heros 
        src={herosImg} 
        heading="increase Revenue"
        span1="Efficiently"
        span2="growth"
        description="Attract new customers, increase sales from existing customers, enter new markets, offer new products or services, manage the upselling or cross-selling process, optimize pricing strategies, reduce costs, and improve operational efficienty to achieve sustainable revenue growth and maximize profitability."
        />
      </div>
      <div>
        <Partners />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        headings="A one-stop Conversion Solution for every business platform."
        description="Increase customer satisfaction through streamlined, efficient and high-converting digital marketing campaigns."
        subHeadings="Expand Product Offerings to Enhance the Customer Experience"
        subDescriptions="Identify potential gaps in current offerings. Introduce new features or services that align with user needs. Streamline user onboarding, offer responsive customer support, and provide regular updates based on feedback."
        gap={30}
        flexDirection="row"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Incentivize Users"
        subDescriptions="Use customer data to identify trends, preferences, and areas for improvement. Personalize offerings and messaging to incentivize users to refer others and leave positive reviews."
        gap={30}
        flexDirection="row-reverse"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Target New  Market & Implement Marketing Campaigns"
        subDescriptions="Look for opportunities to enter new markets or target specific industries  provide unique value."
        subDescriptions2="Targeted marketing efforts can attract new users and retain existing ones."
        gap={30}
        flexDirection="row"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Strengthen Partnerships"
        subDescriptions="Collaborate with other platforms or businesses to reach new audiences or offer complementary services."
        subDescriptions2='"With OmniX, we can streamline the whole conversion process and optimize landing and help identify the most effective strategies to grow revenue."'
        gap={30}
        flexDirection="row-reverse"
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
  )
}

export default IncreaseRev
