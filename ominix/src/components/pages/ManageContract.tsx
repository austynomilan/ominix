import BoardComponent from "../BoardComponent";
import Nav from "../Nav";
import dasboard from "../../assets/dash2.svg";
import ControlButton from "../ControlButton";
import Elips from "../../assets/Ellipse41.svg";
import Footer from "../Footer";

function ManageContract() {
  return (
    <div className="w-[100%] bg-[#F8F8FA]">
    <Nav />
    <div className="w-[100%] h-[96vh]">
      <BoardComponent
        heading="Secure Customer Renewal"
        description="Employ appropriate measures and procedures to guarantee that your customers continue their subscription with your service."
        dashboardImage={dasboard}
      />
    </div>
    <div className="flex mt-16 p-6">
      <ControlButton />
      <div className="w-[80%]">
        <div>
          <h1 className="text-[32px] font-bold text-primary">
          Introduction to Customer Renewal
          </h1>
          <span className="pl-20 flex flex-col gap-4">
            <p>
            Renewal successBLOC refers to a set of strategies, tools, and processes aimed at maximizing renewal rates for subscriptions or memberships. This includes features such as automated renewal reminders, personalized offers, customer feedback loops, and proactive customer support.
            </p>
            <p>
            The renewal successBLOC helps ensure that customers continue to use the platform and maintain their subscriptions, contributing to long-term revenue growth and customer retention.
            </p>
          </span>
        </div>
        <div className="mt-4">
          <h1 className="text-[32px] font-bold text-primary">
          The Renewal Toolkit helps you to
          </h1>
          <span className="pl-24 flex flex-col gap-4">
            <ul className="list-disc">
              <li>
              Remind customers to renew.
              </li>
              <li>
              Organize customers into groups for targeted strategies.
              </li>
              <li>
              Gather feedback on renewal experiences.
              </li>
              <li>
              Create and deliver renewal offers.
              </li>
              <li>
              Analyze performance to improve strategies.
              </li>
            </ul>
          </span>
        </div>
        <div className="text-[32px] font-bold text-primary mt-6 mb-8">
          What's More?
        </div>
        <div className="flex gap-2 items-center text-2xl font-bold text-primary pl-16">
          <img src={Elips} height={24} width={24} />
          GOALS & KPIS
        </div>
        <div className="mt-2">
          <h1 className="text-lg font-bold text-primary pl-20">Manage Customer Renewal</h1>
          <span className="pl-24 flex flex-col gap-4">
            <ul className="list-disc">
              <li>
              Increase renewal rate by 85% within 3 months.
              </li>
              <li>Increase customer lifetime value (CLV),</li>
              <li>
              Increase customer satisfaction scores (CSAT)
              </li>
              <li>Increase net promoter score (NPS).</li>
            </ul>
          </span>
        </div>
        <div className=" mt-4  pl-16">
            <span className="flex gap-2 items-center font-bold text-primary text-2xl">
                <img src={Elips} height={24} width={24} />
          CUSTOMER SEGMENTS
            </span>
            <p>Utilize filtering and analysis to monitor user or account groups, anticipating behaviors and ensuring successful outcomes.</p>

        </div>
        <div className="mt-4">
          <span className="pl-24 flex flex-col gap-4">
            <ul className="list-disc">
              <li>
              Identify and prioritize risky high-value renewals
              </li>
              <li>Categorize them based on health status: poor, good, or average.</li>
              <li>
              Track renewals Offer incentives for their first renewal to establish loyalty.
              </li>
              <li>Provide premium upgrade options or loyalty rewards.</li>
              <li>Offer discounts or additional benefits to incentivize retention.</li>
            </ul>
          </span>
        </div>
        <div className=" mt-4  pl-16">
            <span className="flex gap-2 items-center font-bold text-primary text-2xl">
                <img src={Elips} height={24} width={24} />
                Success Plays
            </span>
            <p>Divide customers into groups based on behavior, demographics, or purchase history.</p>

        </div>
        <div className="mt-4">
          <span className="pl-24 flex flex-col gap-4">
            <ul className="list-disc">
              <li>
              Tailor renewal offers to each segment's preferences and needs.
              </li>
              <li>Send offers at optimal times when customers are most likely to renew.</li>
              <li>
              Gather feedback from renewing customers to refine future campaigns.
              </li>
            </ul>
          </span>
        </div>
        <div className=" mt-4  pl-16">
            <span className="flex gap-2 items-center font-bold text-primary text-2xl">
                <img src={Elips} height={24} width={24} />
                CAMPAIGNS
            </span>
            <p>Streamline your communication process by setting up automated campaigns to send emails triggered by different objectives.</p>

        </div>
        <div className="mt-4">
          <span className="pl-24 flex flex-col gap-4">
            <ul className="list-disc">
              <li>
              Increase customer renewal rates.
              </li>
              <li>Personalized renewal offers based on customer segments.</li>
              <li>
              Email marketing, in-app notifications, targeted social media ads.
              </li>
              <li>Compelling messaging highlighting benefits of renewal, exclusive offers, and testimonials.</li>
            </ul>
          </span>
        </div>
        <div className=" mt-4  pl-16">
            <span className="flex gap-2 items-center font-bold text-primary text-2xl">
                <img src={Elips} height={24} width={24} />
                RESOURCES
            </span>
            <p>Assist your team in adopting company and industry best practices to expedite learning and training, fostering consistency throughout your engagements.</p>
        </div>
        <div className="mt-4">
          <span className="pl-24 flex flex-col gap-4">
            <ul className="list-disc">
              <li>
              Budget allocation for campaign execution, including ad spend, content creation, and personnel costs.
              </li>
              <li>Skilled team members for campaign planning, content creation, and data analysis.</li>
              <li>
              Tools for data analytics, customer segmentation, and campaign management.
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default ManageContract
