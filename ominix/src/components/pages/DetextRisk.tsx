import BoardComponent from "../BoardComponent";
import Nav from "../Nav";
import dasboard from "../../assets/dash5.svg";
import ControlButton from "../ControlButton";
import Elips from "../../assets/Ellipse41.svg";
import Footer from "../Footer";
function DetextRisk() {
  return (
    <div className="w-[100%] bg-[#F8F8FA]">
      <Nav />
      <div className="w-[100%] h-[96vh]">
        <BoardComponent
          heading="Detect Risk"
          description="Gain immediate insight into customer indicators and pivotal occurrences to assist in minimizing customer attrition."
          dashboardImage={dasboard}
        />
      </div>
      <div className="flex mt-16 p-6">
        <ControlButton />
        <div className="w-[80%]">
          <div>
            <h1 className="text-[32px] font-bold text-primary">
              Introduction to Detect Risk
            </h1>
            <span className="pl-20 flex flex-col gap-4">
              <p>
                Detecting risks is a foundational aspect of effective risk
                management, serving as the crucial first step in safeguarding
                against potential threats and uncertainties. Whether in the
                realms of business, finance, project management, or
                cybersecurity, the ability to identify and anticipate risks is
                paramount to mitigating their potential impact. This proactive
                approach enables organizations to stay ahead of emerging
                challenges, capitalize on opportunities, and ensure the
                achievement of their objectives. In this introduction, we will
                delve into the strategies, methodologies, and best practices
                involved in detecting risks, empowering stakeholders to navigate
                the complexities of risk management with confidence and
                foresight.
              </p>
            </span>
          </div>
          <div>
            <h1 className="text-[32px] my-4 font-bold text-primary">
              The Detect Risk allows you to:
            </h1>
            <span className="pl-20 flex flex-col gap-4">
              <ul className="list-disc">
                <li>
                  Proactively identify potential threats and uncertainties.
                </li>
                <li>Anticipate challenges and opportunities.</li>
                <li>
                  Mitigate the impact of risks on projects, operations, and
                  finances.
                </li>
                <li>Make informed strategic decisions.</li>
                <li>Enhance resilience and adaptability.</li>
                <li>Ensure compliance with regulations and standards.</li>
                <li>Protect against cyber threats and vulnerabilities.</li>
                <li>
                  Ensure adoption efforts align with organizational goals for
                  strategic impact.
                </li>
                <li>
                  Maintain business continuity in the face of disruptions.
                </li>
                <li>Optimize resource allocation and investment decisions.</li>
                <li>
                  Achieve strategic objectives effectively amidst uncertainty.
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
            <p>Monitor success rate for business and customers.</p>
            <span>
              <p className="text-lg font-bold mt-4">Manage Customer Risk</p>
              <span className="pl-6 flex flex-col gap-4">
                <ul className="list-disc">
                  <li>Customer satisfaction levels</li>
                  <li>Customer retention rates</li>
                  <li>Revenue from existing customers</li>
                  <li>Customer loyalty and advocacy</li>
                  <li>Brand reputation and perception</li>
                  <li>Monthly Active Users</li>
                  <li>Future sales opportunities</li>
                  <li>Cross-selling and upselling opportunities</li>
                  <li>Customer feedback and sentiment</li>
                  <li>Product/service adoption and usage pattern</li>
                </ul>
              </span>

              <p className="text-lg font-bold mt-4"> Manage Revenue Risk</p>
              <p>
                Analyze and categorize user or account groups to anticipate
                behaviors and drive success.
              </p>
              <span className="pl-6 flex flex-col gap-4">
                <ul className="list-disc">
                  <li>Fluctuations in sales volume.</li>
                  <li>Changes in pricing strategies.</li>
                  <li>Economic downturns impacting consumer spending.</li>
                  <li>Market competition affecting market share.</li>
                  <li>Regulatory changes impacting revenue streams.</li>
                  <li>
                    Casual users who use the product or service sporadically or
                    for specific tasks.
                  </li>
                  <li>
                    Currency exchange rate fluctuations for international
                    operations.
                  </li>
                  <li>Customer churn leading to loss of recurring revenue.</li>
                  <li>
                    Supply chain disruptions affecting product availability and
                    sales.
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
              Provide structured frameworks and actions to guide Customer
              Success teams in achieving their objectives and driving customer
              satisfaction and business success.
            </p>
          </div>
          <div className="mt-4">
            <span className="pl-24 flex flex-col gap-4">
              <ul className="list-disc">
                <li>Risk Identification</li>
                <li>Risk Categorization</li>
                <li>Risk Assessment</li>
                <li>Risk Register</li>
                <li>Risk Analysis</li>
                <li>Risk Mitigation</li>
                <li>Monitoring and Control</li>
                <li>Communication and Reporting</li>
                <li>Risk Culture</li>
                <li>Continuous Improvement</li>
              </ul>
            </span>
          </div>
          <div className=" mt-4  pl-16">
            <span className="flex gap-2 items-center font-bold text-primary text-2xl">
              <img src={Elips} height={24} width={24} />
              CAMPAIGNS
            </span>
            <p>Automate communication campaigns to address specific goals</p>
            <p className="text-lg font-bold mt-4">
              Overdue Payment Notifications:
            </p>
          </div>
          <div>
            <span className="pl-24 flex flex-col gap-4">
              <ul className="list-disc">
                <li>Past-Due Payment Notification - 7 Days</li>
                <li>Past-Due Payment Notification - 14 Days</li>
                <li>Past-Due Payment Notification - 30 Days</li>
                <li>Past-Due Payment Notification - 60 Days</li>
                <li>Past-Due Payment Notification - 90 Days</li>
              </ul>
            </span>
          </div>
          <div className=" mt-4  pl-16">
            <span className="flex gap-2 items-center font-bold text-primary text-2xl">
              <img src={Elips} height={24} width={24} />
              RESOURCES
            </span>
            <p>
              Support your team by providing company and industry best practices
              to streamline learning and training processes, ensuring
              consistency across engagements.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetextRisk;
