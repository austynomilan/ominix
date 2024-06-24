
import BoardComponent from "../BoardComponent";
import Nav from "../Nav";
import dasboard from "../../assets/dash3.svg";
import ControlButton from "../ControlButton";
import Elips from "../../assets/Ellipse41.svg";
import Footer from "../Footer";
function MonitorCustomerHealth() {
  return (
    <div className="w-[100%] bg-[#F8F8FA]">
    <Nav />
    <div className="w-[100%] h-[96vh]">
      <BoardComponent
        heading="Track Customer Health"
        description="Enhance your understanding and boost the well-being of your customers through comprehensive health monitoring."
        dashboardImage={dasboard}
      />
    </div>
    <div className="flex mt-16 p-6">
      <ControlButton />
      <div className="w-[80%]">
        <div>
          <h1 className="text-[32px] font-bold text-primary">
          Introduction to Customer Health
          </h1>
          <span className="pl-20 flex flex-col gap-4">
            <p>
            Analyzing customer health entails examining various metrics and data points to gauge the well-being and engagement levels of customers interacting with the platform. This analysis involves tracking customer behavior, satisfaction, and interactions across different touchpoints to identify patterns, trends, and potential areas for improvement. By understanding customer health, businesses using OmniX can make informed decisions to optimize their conversion strategies, enhance customer experiences, and ultimately drive more successful conversions.
            </p>
          </span>
        </div>
        <div className="text-[32px] font-bold text-primary mt-6 mb-8">
          What's More?
        </div>
        <div className=" mt-4  pl-16">
            <span className="flex gap-2 items-center font-bold text-primary text-2xl">
                <img src={Elips} height={24} width={24} />
          GOALS & KPIS
            </span>
            <p>Utilize filtering and analysis to monitor user or account groups, anticipating behaviors and ensuring successful outcomes.</p>
            <span>
            <p className="text-lg font-bold mt-4">Track customer Health</p>
            <span className="pl-6 flex flex-col gap-4">
            <ul className="list-disc">
              <li>
              Customer Engagement Health
              </li>
              <li>Conversation Quality Health</li>
              <li>
              Customer Satisfaction Health
              </li>
              <li>Performance Health</li>
              <li>Feature Adoption Health</li>
              <li>Content Releva</li>
              <li>Integration Health</li>
              <li>Accessibility Health</li>
              <li>Scalability Health</li>
            </ul>
          </span>
          <p className="text-lg font-bold mt-4">Verify Customer Health</p>
          <span className="pl-6 flex flex-col gap-4">
            <ul className="list-disc">
              <li>
              Proportion of Accounts with Satisfactory Health
              </li>
              <li>Trend of Accounts with Satisfactory Health</li>
              <li>
              Enhance Health Status
              </li>
              <li>Health Deterioration</li>
            </ul>
          </span>
          <p className="text-lg font-bold mt-4">Transition Customers to Improved Health</p>
          <span className="pl-6 flex flex-col gap-4 mb-4">
            <ul className="list-disc">
              <li>
              Proportion of Accounts with Satisfactory Health
              </li>
              <li>Proportion of Accounts with Suboptimal Health</li>
              <li>
              Risked Contract Value Across Dimensions
              </li>
              <li>Trend of Paying Accounts with Suboptimal Health</li>
            </ul>
          </span>
          <p>Monitoring the effectiveness of conversations through metrics such as response times, resolution rates, and sentiment analysis to ensure high-quality interactions.</p>
            </span>
        </div>
        <div className="mt-2">
          
        </div>
        <div className=" mt-4  pl-16">
            <span className="flex gap-2 items-center font-bold text-primary text-2xl">
                <img src={Elips} height={24} width={24} />
          CUSTOMER SEGMENTS
            </span>
            <p>Monitoring the effectiveness of conversations through metrics such as response times, resolution rates, and sentiment analysis to ensure high-quality interactions.</p>

        </div>
        <div className="mt-4">
          <span className="pl-24 flex flex-col gap-4">
            <ul className="list-disc">
              <li>
              All paying customers
              </li>
              <li>Accounts with potential risk</li>
              <li>
              Accounts experiencing a decline in health
              </li>
              <li>Accounts showing improvement to good health</li>
              <li>Paying accounts with consistently good health</li>
              <li>Paying accounts with poor health</li>
            </ul>
          </span>
        </div>
        <div className=" mt-4  pl-16">
            <span className="flex gap-2 items-center font-bold text-primary text-2xl">
                <img src={Elips} height={24} width={24} />
                Success Plays
            </span>
            <p>Automatically triggered or manual workflows containing sets of tasks and actions, prompting Customer Success Managers to focus on the most meaningful activities right on time</p>

        </div>
        <div className="mt-4">
          <span className="pl-24 flex flex-col gap-4">
            <ul className="list-disc">
              <li>
              Track Days in Good Health
              </li>
              <li>Reset Days in Good Health</li>
              <li>
              Track Days in Poor Health
              </li>
              <li>Reset Days in Poor Health</li>
              <li>Persistent Poor Health</li>
              <li>Reference Request</li>
            </ul>
          </span>
        </div>
        <div className=" mt-4  pl-16">
            <span className="flex gap-2 items-center font-bold text-primary text-2xl">
                <img src={Elips} height={24} width={24} />
                CAMPAIGNS
            </span>
            <p>Utilize campaigns to automate your communication efforts, sending emails triggered by specific objectives:</p>

        </div>
        <div className="mt-4">
          <span className="pl-24 flex flex-col gap-4">
            <ul className="list-disc">
              <li>
              Segment customers based on health status.
              </li>
              <li>Analyze data for insights.</li>
              <li>
              Personalize messages.
              </li>
              <li>Gather feedback.</li>
              <li>Automate processes.</li>
              <li>Monitor and measure results.</li>
              <li>Foster cross-functional collaboration</li>
            </ul>
          </span>
        </div>
        <div className=" mt-4  pl-16">
            <span className="flex gap-2 items-center font-bold text-primary text-2xl">
                <img src={Elips} height={24} width={24} />
                RESOURCES
            </span>
            <p>Assist your team by offering company and industry best practices to optimize learning and training procedures, promoting uniformity across engagements.</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default MonitorCustomerHealth
