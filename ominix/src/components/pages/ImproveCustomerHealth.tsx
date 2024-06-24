import Faq from "../Faq"
import Footer from "../Footer"
import Heros from "../Heros"
import Nav from "../Nav"
import Partners from "../Partners"
import Section1 from "../Section1"
import Slider from "../Slider"
import herosImg from '../../assets/herosImage.png'

function ImproveCustomerHealth() {
  return (
    <div>
      <div className="w-[100%] h-screen">
      <Nav />
      <div className="w-[100%] h-screen overflow-y-auto">
        <Heros 
        src={herosImg} 
        heading="customer health"
        span1="Improve"
        span2=" scores"
        description="Focus on customer satisfaction, implement strategies that foster trust, and enhance their overall experience and drive growth."
        />
      </div>
      <div>
        <Partners />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        headings="Customer success software your business can’t outgrow"
        description="Omni X simplifies campaign management by providing a centralized platform for marketers to create, monitor, and analyze digital marketing campaigns across channels, enabling strategic planning."
        subHeadings="Analyze customer health metrics"
        subDescriptions="Define the metrics for measuring customer health, which may encompass usage patterns, satisfaction scores, product adoption rates, churn rates, or Net Promoter Score (NPS) to identify trends and areas for enhancement."
        gap={30}
        flexDirection="row"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Conversion Optimization by Customer Health"
        subDescriptions="Understanding customer health metrics can guide the optimization of the platform to improve conversion rates by monitoring customer satisfaction scores or NPS."
        gap={30}
        flexDirection="row-reverse"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Customer Segmentation"
        subDescriptions="By monitoring usage patterns and product adoption rates, users can be segmented based on their level of engagement or activity to allow for tailored marketing campaigns, product updates, or outreach strategies that are better suited to different customer needs."
        gap={30}
        flexDirection="row"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Retention of Customers based on health Score"
        subDescriptions="Focus more on retaining valuable customers by understanding customer health which allows for more accurate predictions."
        subDescriptions2='"OmniX is a powerful tool that enables our business to improve customer health by leveraging advanced analytics, AI, and machine learning to gain a comprehensive understanding of their customers, predict future behaviors, and proactively address issues."'
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
    </div>
  )
}

export default ImproveCustomerHealth
