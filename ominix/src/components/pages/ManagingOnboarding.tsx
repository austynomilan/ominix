import BoardComponent from "../BoardComponent";
import Nav from "../Nav";
import dasboard from "../../assets/dash.svg";
import ControlButton from "../ControlButton";
import Elips from "../../assets/Ellipse41.svg";
import Footer from "../Footer";

function ManagingOnboarding() {
  return (
    <div className="w-[100%] bg-[#F8F8FA]">
      <Nav />
      <div className="w-[100%] h-[96vh]">
        <BoardComponent
          heading="Welcome to Omni-X Onboarding"
          description="Ensure a seamless and efficient onboarding process to delight customers from the very beginning."
          dashboardImage={dasboard}
        />
      </div>
      <div className="flex mt-16 p-6">
        <ControlButton />
        <div className="w-[80%]">
          <div>
            <h1 className="text-[32px] font-bold text-primary">
              Introduction to Omni-X Onboarding
            </h1>
            <span className="pl-20 flex flex-col gap-4">
              <p>
                Omn-iX introduces an innovative onboarding experience tailored
                to streamline your journey towards conversion. The Onboarding
                SuccessBLOC offers a comprehensive solution designed to
                effortlessly guide you through the process.
              </p>
              <p>
                Your initial interactions with Omni-X set the stage for a
                fruitful partnership. A smooth onboarding journey not only
                enhances your immediate experience but also lays the foundation
                for long-term success. This platform facilitates seamless
                transitions through each stage of onboarding, ensuring
                efficiency and ease at every step.
              </p>
              <p>
                Optimizing your customer onboarding involves adopting best
                practices, emulating companies with exceptional onboarding
                processes, and utilizing key performance indicators to assess
                your onboarding effectiveness.
              </p>
            </span>
          </div>
          <div className="mt-4">
            <h1 className="text-[32px] font-bold text-primary">
              The onboarding toolkit helps users in various ways, including:
            </h1>
            <span className="pl-24 flex flex-col gap-4">
              <ul className="list-disc">
                <li>
                  Provides step-by-step guidance through the setup process,
                  ensuring users understand and configure essential features
                  correctly.
                </li>
                <li>
                  Allows users to customize their experience according to their
                  specific needs and preferences, such as selecting relevant
                  integrations, branding options, and user roles.
                </li>
                <li>
                  Offers access to training materials, tutorials, and resources
                  to help users quickly learn how to use the platform
                  effectively.
                </li>
                <li>
                  Enables users to track their onboarding progress and see what
                  steps they've completed.
                </li>
                <li>
                  Provide feedback on their onboarding experience, allowing the
                  platform to continuously improve and address any pain points
                  or areas for enhancement.
                </li>
                <li>
                  Assists users in integrating the platform with their existing
                  systems or third-party tools, ensuring seamless data flow and
                  interoperability.
                </li>
                <li>
                  Presents users with a checklist or roadmap outlining the
                  necessary steps for successful onboarding.
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
            <h1 className="text-lg font-bold text-primary pl-20">Gaols</h1>
            <span className="pl-24 flex flex-col gap-4">
              <ul className="list-disc">
                <li>
                  Specify measurable objectives aligned with business outcomes
                  (e.g., sales, brand awareness, lead generation).
                </li>
                <li>Break down goals into smaller, achievable targets.</li>
                <li>
                  Ensure goals are SMART (Specific, Measurable, Achievable,
                  Relevant, Time-bound).
                </li>
              </ul>
            </span>
          </div>
          <div className="mt-2">
            <h1 className="text-lg font-bold text-primary pl-20">
              KPIs (Key Performance Indicators):
            </h1>
            <span className="pl-24 flex flex-col gap-4">
              <ul className="list-disc">
                <li>
                  Track metrics such as conversion rate, click-through rate,
                  cost per acquisition, and return on ad spend.
                </li>
                <li>
                  Monitor engagement metrics like likes, shares, comments, and
                  time spent on site.
                </li>
                <li>
                  Measure brand sentiment through surveys or social media
                  monitoring tools.
                </li>
                <li>
                  Analyze customer retention and lifetime value to gauge
                  long-term success.
                </li>
              </ul>
            </span>
          </div>
          <div className="mt-2">
            <h1 className="text-lg font-bold text-primary pl-20">
              Resolve Risks Quickly
            </h1>
            <span className="pl-24 flex flex-col gap-4">
              <ul className="list-disc">
                <li>Average Days to Resolve Risks</li>
                <li>Average Days to Resolve Risks Trend.</li>
                <li>
                  Measure brand sentiment through surveys or social media
                  monitoring tools.
                </li>
                <li>
                  Analyze customer retention and lifetime value to gauge
                  long-term success.
                </li>
              </ul>
            </span>
          </div>
          <div className="flex gap-2 items-center text-2xl mt-4 font-bold text-primary pl-16">
            <img src={Elips} height={24} width={24} />
            CUSTOMER SEGMENTS
          </div>
          <div className="mt-2">
            <span className="pl-24 flex flex-col gap-4">
              <ul className="list-disc">
                <li>
                  Identify and segment your target audience based on
                  demographics, psychographics, behaviors, and preferences.
                </li>
                <li>Tailor your campaign messaging and offer to resonate with each segment's unique needs and interests.</li>
                <li>
                Utilize data analytics and customer feedback to refine your segmentation strategy over time and ensure you're effectively reaching and engaging with your desired audience segments.
                </li>
              </ul>
            </span>
          </div>
          <div className="flex gap-2 items-center text-2xl mt-4 font-bold text-primary pl-16">
            <img src={Elips} height={24} width={24} />
            SUCCESSPLAYS
          </div>
          <div className="mt-2">
            <span className="pl-24 flex flex-col gap-4">
              <ul className="list-disc">
                <li>
                Implement A/B testing to optimize messaging and creative elements.
                </li>
                <li>TUtilize personalization to enhance engagement and conversion rates.</li>
                <li>
                Integrate multimedia content (e.g., videos, infographics) for a richer experience.
                </li>
                <li>Implement remarketing strategies to re-engage with prospects.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-2 items-center text-2xl mt-4 font-bold text-primary pl-16">
            <img src={Elips} height={24} width={24} />
            CAMPAIGNS
          </div>
          <div className="mt-2">
            <span className="pl-24 flex flex-col gap-4">
              <ul className="list-disc">
                <li>
                Define the target audience and segments.
                </li>
                <li>Develop a compelling message and creative assets.</li>
                <li>
                Choose appropriate channels (e.g. email).
                </li>
                <li>Set a timeline for the campaign rollout and key milestones.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-2 items-center text-2xl mt-4 font-bold text-primary pl-16">
            <img src={Elips} height={24} width={24} />
            RESOURCES
          </div>
          <div className="mt-2">
            <span className="pl-24 flex flex-col gap-4">
              <ul className="list-disc">
                <li>
                Identify available budget, team members, technology, and external partners.
                </li>
                <li>Allocate resources effectively to support the campaign's objectives.</li>
                <li>
                Ensure that resources are utilized efficiently to maximize ROI.
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ManagingOnboarding;
