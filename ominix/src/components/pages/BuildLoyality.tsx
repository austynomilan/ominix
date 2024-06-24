import Faq from "../Faq"
import Footer from "../Footer"
import Heros from "../Heros"
import Nav from "../Nav"
import Partners from "../Partners"
import Section1 from "../Section1"
import Slider from "../Slider"
import herosImg from '../../assets/herosImage.png'

function BuildLoyality() {
  return (
    <div>
      <div className="w-[100%] h-screen">
      <Nav />
      <div className="w-[100%] h-screen overflow-y-auto">
        <Heros 
        src={herosImg} 
        heading="customer"
        span1="Build"
        span2="loyalty"
        description="Deliver exceptional service, engage in personalized interactions, listen to feedback and foster trust to create a memorable experience."
        />
      </div>
      <div>
        <Partners />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        headings="Customer success software your business can’t outgrow"
        description="Omni X serves as a solution to the fragmented campaign management by creating a centralized platform that empowers marketers to design, manage, and track their digital marketing campaigns."
        subHeadings="Personalize loyalty program offering using customer data"
        subDescriptions="Understand your customers and track their individual needs and preferences and use that information to make informed decisions about your program. Send targeted and relevant offers and promotions to your customers, improve personal experience, increase customer engagement and boost the effectiveness to improve your conversion rates in the process."
        gap={30}
        flexDirection="row"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Incentivizing customers to participate"
        subDescriptions="Offer clear benefits for the price that are relevant and valuable to them, offer multiple ways for customers to join, such as online, in-store, or through a mobile app with user-friendly interface, encourage referrals And, make sure that the process of participating and earning rewards is straightforward and easy to understand."
        gap={30}
        flexDirection="row-reverse"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Manage the Metrics"
        subDescriptions="Constantly monitor Customer Engagement through reviews, feedback,  and keep track of the participation rate to enhance informed decisions about how to improve where necessary and determine areas of positive impact to drive higher conversion rates"
        gap={30}
        flexDirection="row-reverse"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Integrate marketing strategy"
        subDescriptions="Collaborate with other channels and leverage it to drive engagement, ensuring consistency with your brand messaging and values, and using customer data to inform your other marketing initiatives, you'll create a more cohesive customer experience and boost your conversion rates in the process."
        subDescriptions2=' "OmniX offers a solution that is more efficient and effective than existing alternatives. Through it, we have been able to attract new clients and maintain a competitive edge"'
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

export default BuildLoyality
