import BoardComponent from "../BoardComponent";
import Nav from "../Nav";
import dasboard from "../../assets/dash4.svg";
import ControlButton from "../ControlButton";
import Elips from "../../assets/Ellipse41.svg";
import Footer from "../Footer";

function DriveProduct() {
  return (
    <div className="w-[100%] bg-[#F8F8FA]">
      <Nav />
      <div className="w-[100%] h-[96vh]">
        <BoardComponent
          heading="Enhance Customer Adoption"
          description="Tailor customer's product experience by ensuring usage, and unlocking added value for each individual."
          dashboardImage={dasboard}
        />
      </div>
      <div className="flex mt-16 p-6">
        <ControlButton />
        <div className="w-[80%]">
          <div>
            <h1 className="text-[32px] font-bold text-primary">
              Introduction to Adoption
            </h1>
            <span className="pl-20 flex flex-col gap-4">
              <p>
                The Adoption SuccessBLOC serves as a strategic framework to
                facilitate the successful integration and utilization of new
                technologies, platforms, or practices within organizations. It
                ensures user-centric design, comprehensive onboarding,
                continuous education and training, feedback mechanisms,
                community engagement, measurement and analytics, and executive
                sponsorship and organizational alignment. By incorporating these
                elements, organizations can drive user adoption, proficiency,
                satisfaction, and ultimately, maximize the value derived from
                the adopted technologies or platforms.
              </p>
              <p>
                The Adoption SuccessBLOC can be used as a guiding framework for
                organizations embarking on the integration of new technologies,
                platforms, or practices. By integrating its principles into
                adoption initiatives, organizations can ensure a seamless
                transition, foster user engagement and proficiency, gather
                valuable feedback, cultivate a supportive user community,
                measure adoption metrics, and align adoption efforts with
                strategic organizational goals. Ultimately, the Adoption
                SuccessBLOC facilitates a structured approach to adoption,
                leading to increased user satisfaction and optimized outcomes.
              </p>
            </span>
          </div>
          <div>
            <h1 className="text-[32px] my-4 font-bold text-primary">
              Using the Adoption Toolkit helps you to:
            </h1>
            <span className="pl-20 flex flex-col gap-4">
              <ul className="list-disc">
                <li>
                  Facilitate seamless platform integration into existing
                  workflows.
                </li>
                <li>Ensure users exploit all platform features effectively.</li>
                <li>Tailor onboarding for individual user needs.</li>
                <li>
                  Provide ongoing training on platform updates and best
                  practices.
                </li>
                <li>
                  Establish avenues for user feedback to drive platform
                  improvements.
                </li>
                <li>
                  Foster user collaboration and support within communities.
                </li>
                <li>
                  Monitor adoption metrics to gauge success and areas for
                  enhancement.
                </li>
                <li>
                  Ensure adoption efforts align with organizational goals for
                  strategic impact.
                </li>
              </ul>
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
            <p>
              Assessing success metrics for both customer satisfaction and
              business performance.
            </p>
            <span>
              <p className="text-lg font-bold mt-4">
                Customer engagement with product features
              </p>
              <span className="pl-6 flex flex-col gap-4">
                <ul className="list-disc">
                  <li>Accounts with low or decreased usage</li>
                  <li>High Value Daily Active Users</li>
                  <li>Percentage of accounts demonstrating high utilization</li>
                  <li>Accounts with underutilized licenses</li>
                  <li>Customers who have increased product utilization</li>
                  <li>Monthly Active Users</li>
                </ul>
              </span>
              <p>
                Boosting customer satisfaction and Enhancing personalized
                experiences.
              </p>
              <p className="text-lg font-bold mt-4"> Customer Segment</p>
              <p>
                Analyze and categorize user or account groups to anticipate
                behaviors and drive success.
              </p>
              <span className="pl-6 flex flex-col gap-4">
                <ul className="list-disc">
                  <li>
                    New users who have recently signed up for the product or
                    service.
                  </li>
                  <li>
                    Long-term users who have been using the product or service
                    consistently over an extended period.
                  </li>
                  <li>
                    High-value users who generate significant revenue or
                    engagement for the business.
                  </li>
                  <li>
                    Low-engagement users who have minimal interaction with the
                    product or service.
                  </li>
                  <li>
                    Power users who frequently utilize advanced features or
                    functionalities.
                  </li>
                  <li>
                    Casual users who use the product or service sporadically or
                    for specific tasks.
                  </li>
                  <li>
                    Churned users who have discontinued their usage of the
                    product or service.
                  </li>
                  <li>
                    Trial users who are currently evaluating the product or
                    service during a trial period.
                  </li>
                  <li>
                    International users who are located in different regions or
                    countries.
                  </li>
                  <li>
                    Users with specific demographic characteristics such as age,
                    gender, or income level.
                  </li>
                  <li>
                    Users with varying levels of product knowledge or expertise.
                  </li>
                  <li>
                    Users with different usage patterns based on time of day,
                    day of the week, or seasonality.
                  </li>
                  <li>
                    Users with diverse preferences or interests that influence
                    their usage behavior.
                  </li>
                  <li>
                    Users with different subscription tiers or pricing plans.
                  </li>
                  <li>
                    Users who have provided feedback or engaged with customer
                    support in the past.
                  </li>
                </ul>
              </span>
            </span>
          </div>

          <div className=" mt-4  pl-16">
            <span className="flex gap-2 items-center font-bold text-primary text-2xl">
              <img src={Elips} height={24} width={24} />
              Success Plays
            </span>
            <p>
              Strategic workflows guiding teams to execute impactful actions,
              driving success at every stage.
            </p>
          </div>
          <div className="mt-4">
            <span className="pl-24 flex flex-col gap-4">
              <ul className="list-disc">
                <li>Plan for Quarterly Business Review (QBR).</li>
                <li>Arrange Executive meetings.</li>
                <li>Promote Product Adoption.</li>
                <li>Track and access performance</li>
                <li>Improve the Health of Renewal Account</li>
              </ul>
            </span>
          </div>
          <div className=" mt-4  pl-16">
            <span className="flex gap-2 items-center font-bold text-primary text-2xl">
              <img src={Elips} height={24} width={24} />
              CAMPAIGNS
            </span>
            <p>
              Utilize campaigns to automate your communication efforts, sending
              emails triggered by specific objectives:
            </p>
          </div>
          <div className="mt-4">
            <span className="pl-24 flex flex-col gap-4">
              <ul className="list-disc">
                <li>Utilization Drop Alert</li>
                <li>Feature Adoption</li>
                <li>Re-Engagement</li>
                <li>SuccessBeat Weekly Update</li>
                <li>Utilization Improvement Tips</li>
                <li>Utilization Benchmarking</li>
                <li>Utilization Challenge</li>
                <li>Utilization Feedback</li>
                <li>Utilization Success Story</li>
                <li>Renewal Reminder</li>
              </ul>
            </span>
          </div>
          <div className=" mt-4  pl-16">
            <span className="flex gap-2 items-center font-bold text-primary text-2xl">
              <img src={Elips} height={24} width={24} />
              RESOURCES
            </span>
            <p>
              Assist your team by offering company and industry best practices
              to optimize learning and training procedures, promoting uniformity
              across engagements.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DriveProduct;
