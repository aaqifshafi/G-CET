import Heading2 from "@/components/Heading2";
import Heading3 from "@/components/Heading3";
import CollegeAddress from "@/components/public/CollegeAddress";
import CoursesWeOffer from "@/components/public/CoursesWeOffer";
import WhyChooseUs from "./WhyChooseUs";
import GetInTouch from "@/components/public/footer/GetInTouch";

export const metadata = {
  title: "About Us - G-CET",
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
};

const AboutUs = () => {
  const FACILITY_KEYWORDS = [
    "Library",
    "Sports",
    "Laboratories",
    "Hostel",
    "Transport",
    "Auditorium",
    "IT Infrastructure",
    "Lecture Hall",
    "Internet",
    "Placement",
    "Scholarship",
    "Workshop",
    "Wi-Fi",
    "Playground",
    "Reading Rooms",
    "Multipurpose Hall",
    "Conference Hall",
    "Prayer Hall",
    "Medical Facility",
    "Counseling Centre",
    "Common Rooms",
    "Computer Lab",
    "Cafeteria/Canteen",
    "Anti Ragging",
  ];

  const COLLEGE_INFO = [
    {
      title: "Type Of College",
      value: "Government",
    },
    {
      title: "Accreditation & Recognition",
      value: "Government",
    },
    {
      title: "Established",
      value: "2017",
    },
    {
      title: "Affiliation",
      value: "Cluster University Srinagar",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto py-4 px-2">
      <Heading2 headingText={"Address"} />
      <CollegeAddress />

      <div className="grid gap-4 sm:grid-cols-2 my-4">
        {COLLEGE_INFO.map((info, index) => (
          <div className="p-2" key={index}>
            <h4 className="text-xl font-bold text-primary-regular">
              {info.title}
            </h4>
            <p>{info.value}</p>
          </div>
        ))}
      </div>

      <article className="sm:mx-4 grid gap-6 text-lg border-t-8 border-1 bg-secondary shadow-md p-4 border-primary-regular rounded-md">
        <Heading2 headingText={"About us - G-CET, Safapora"} />

        <p>
          <span className="text-primary-regular">
            Govt. College of Engineering & Technology
          </span>{" "}
          Safapora was established
          <span className="text-primary-regular">
            {" "}
            by Govt. of J&K in 2017.
          </span>
        </p>
        <p>
          It is one of the premier institutions established to impart & provide
          in the field of higher education for the deserving candidates and
          prove to be a milestone in the part of progress.
        </p>
        <p>
          GCET Ganderbal, Kashmir offers Undergraduate programme (B.Tech. in
          Core branches of Engineering). The admission to B. Tech. will be
          through Common Entrance Test conducted by Board of Professional
          Entrance Examination (BoPEE), J&K Govt. The college will try to build
          its reputation step by step with a dedicated goal of adding value to
          life and professional standards.
        </p>

        <div className="max-w-full">
          <Heading3 headingText={"Facilites"} />
          <div className="flex gap-4 flex-wrap">
            {FACILITY_KEYWORDS.map((keyword, index) => (
              <span
                className="py-2 px-4 bg-gray-300 font-medium rounded-sm"
                key={index}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* ====== Courses We Offer ====== */}
      </article>
      <CoursesWeOffer />
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
