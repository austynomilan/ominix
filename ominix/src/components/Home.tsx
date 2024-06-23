import Heros from "./Heros"
import Nav from "./Nav"
import herosImg from '../assets/herosImage.png'
import Partners from "./Partners"
import Section1 from "./Section1"
import Faq from "./Faq"
import Footer from "./Footer"
import Slider from "./Slider"

function Home() {
  return (
    <div className="w-[100%] h-screen">
      <Nav />
      <div className="w-[100%] h-screen overflow-y-auto">
        <Heros 
        src={herosImg} 
        heading="Prevent Customer"
        span1="Proactively"
        span2="Churn"
        description="Personalize your customers' product adoption experience to ensure use and help unlock additional value."
        />
      </div>
      <div>
        <Partners />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        headings="A one-stop Conversion Solution for every business platform."
        description="Carry out sales and render service and effectively run marketing campaigns and give and receive feedback through the comprehensive information provided with the intuitive interface."
        subHeadings="Analyze Churn Patterns"
        subDescriptions="Analyze churn patterns to identify common reasons for attrition. Look for trends in customer behavior, such as decreased usage, lack of engagement, or complaints."
        gap={30}
        flexDirection="row"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Monitor Engagement Metrics"
        subDescriptions="Keep track of key metrics such as customer retention rate, customer lifetime value, and churn rate. Use these insights to identify trends and patterns, and adjust your strategies accordingly."
        gap={30}
        flexDirection="row-reverse"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Proactive Customer Support"
        subDescriptions="Anticipate and address potential issues before they escalate. Implement proactive customer support by providing resources like tutorials, FAQs, and troubleshooting guides. Offer live chat or chatbots for real-time assistance."
        gap={30}
        flexDirection="row"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Personalized Communication"
        subDescriptions="Customize communication based on customer preferences. Use customer data to personalize emails, notifications, and in-app messages. Offer tailored recommendations and solutions based on their usage and needs."
        gap={30}
        flexDirection="row-reverse"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Data-Driven Decision Making"
        subDescriptions="Use data analytics to inform decision-making. Monitor user engagement, usage patterns, and customer sentiment. Identify red flags and proactively address them to prevent churn"
        gap={30}
        flexDirection="row"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Value Reinforcement"
        subDescriptions="Regularly highlight new features, updates, and success stories. Showcase how the platform solves specific pain points and adds value to their business or workflow"
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
  )
}

export default Home
