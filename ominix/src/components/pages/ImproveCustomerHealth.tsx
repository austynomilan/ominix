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
        heading="customer success team "
        span1="Boost"
        span2="efficiency"
        description="Identify areas for improve workflows, foster open communication, leverage on technology to create a more productive and high-performing team."
        />
      </div>
      <div>
        <Partners />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        headings="A one-stop Conversion Solution for every business platform."
        description="Help clients track Campaign performance, meet targets and measure their level of success and adapt strategies based on real-time insights."
        subHeadings="Streamlined Marketing Effort"
        subDescriptions="Digital marketing activities no longer have to be performed separately on the different available platforms.  Eliminates disjointed campaign management effort leaving room for less tasks and more effort."
        gap={30}
        flexDirection="row"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Efficient Time Management"
        subDescriptions="Effectively use tools like time tracking software to monitor productivity and identify potential areas for improvement."
        gap={30}
        flexDirection="row-reverse"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Utilize Technology and Automation"
        subDescriptions="Implement tools and software that automate repetitive tasks, streamline processes, and improve efficiency."
        subDescriptions2='"With OmniX, we can streamline the whole conversion process and optimize landing and help identify the most effective strategies to grow revenue."'
        gap={30}
        flexDirection="row-reverse"
        />
      </div>
      <div className="w-[100%] m-auto flex justify-center items-center">
        <Section1 
        subHeadings="Promote Collaboration and Teamwork"
        subDescriptions="Foster a collaborative and supportive work environment where team members can openly share ideas, seek help, and collaborate on projects. Encourage cross-functional collaboration to leverage diverse skills and perspectives."
        subDescriptions2=' "OmniX help enhance team efficiency, productivity, and collaboration, which has led to improved outcomes and success"'
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

export default ImproveCustomerHealth
