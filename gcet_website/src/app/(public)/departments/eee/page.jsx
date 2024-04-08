import Heading2 from "@/components/Heading2";
import Heading3 from "@/components/Heading3";
import CollegeAddress from "@/components/public/CollegeAddress";
import FacultyTable from "@/components/public/FacultyTable";
import { faPlugCircleBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "Department of Electrical Electronics Engineering",
  description:
    "The Department of Elecrtical & Electronics Engineering at Government College of Engineering & Technology, Safapora offers a range of undergraduate programs designed to equip students with the skills and knowledge necessary for success in the field of Electrical & Electronics engineering.",
};

const Eee = () => {
  const COLLEGE_RECOGNITION = [
    {
      title: "Entrance Exam Accepted:",
      value: "CET & JEE Mains",
    },
    {
      title: "Degree Issued By:",
      value: "Cluster University of Srinagar",
    },
    {
      title: "Scholarships:",
      value: "Natianal Scholarship Portal",
    },
    {
      title: "Admission Process",
      value:
        "Merit Based through JK BOPEE, basis of JEE percentile or 12th marks",
    },
  ];

  const faculty = [
    {
      department: "EEE",
      name: "Er. Safeena Al Nisa",
      qualification: "M.Tech",
      designation: "Associate Professor & HoD",
    },
    {
      department: "CSE",
      name: "Ms. Aasia Quyoum",
      qualification: "MCA, MPhil, SET	",
      designation: "Associate Professor & HoD",
    },
    {
      department: "CSE",
      name: "Ms. Aasia Quyoum",
      qualification: "MCA, MPhil, SET	",
      designation: "Associate Professor & HoD",
    },

    {
      department: "Bio-Med",
      name: "Ms. Aasia Quyoum",
      qualification: "MCA, MPhil, SET	",
      designation: "Associate Professor & HoD",
    },
    {
      department: "Adminstration",
      name: "Dr. Mudasir Ashrafm",
      qualification: "PhD",
      designation: "Librarain",
    },
  ];

  return (
    <div className="m-4">
      <article className="overflow-hidden sm:text-lg m-2">
        <h1 className="text-xl sm:text-2xl font-bold my-2">
          Department of Electrical & Electronics Engineering
        </h1>

        <hr />
        <p className="text-lg mt-4">
          <span className="text-4xl text-primary-regular font-bold">W</span>
          elcome to the Department of Electrical & Electronics Engineering
          (EEE), where innovation meets ingenuity to power the future. As a
          cornerstone of technological advancement, our department is dedicated
          to educating the next generation of electrical engineers, equipping
          them with the skills and knowledge to tackle complex challenges and
          drive innovation in the field.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 my-4 mb-12">
          {COLLEGE_RECOGNITION.map((info, index) => (
            <div className="p-2" key={index}>
              <h4 className="text-xl font-bold text-primary-regular">
                {info.title}
              </h4>
              <p>{info.value}</p>
            </div>
          ))}
        </div>
        {/* // Our Mission */}
        <Heading2 headingText={"Our Mission"} />
        <p className="my-8">
          Our mission is to provide a transformative education in electrical and
          electronics engineering, grounded in principles of innovation,
          sustainability, and societal impact. Through a rigorous curriculum,
          hands-on learning experiences, and cutting-edge research, we empower
          students to become leaders in the field, driving advancements in
          technology and shaping the future of electrical engineering.
        </p>
        {/* ===== Faculty Table ===== */}
        <div className="max-w-full overflow-hidden">
          <div className="border max-w-full overflow-x-auto no-scrollbar my-2">
            <div className="px-4 py-2">
              <h3 className="font-semibold text-2xl ">
                <FontAwesomeIcon
                  className="text-2xl mx-2 text-primary-regular"
                  icon={faPlugCircleBolt}
                />{" "}
                Department Staff - EEE
              </h3>
              <p className="text-slate-600 mb-4">
                Our department is home to a team of dedicated faculty members
              </p>
              <div className="w-full mt-0">
                <FacultyTable staff={faculty} />
              </div>
            </div>
          </div>
        </div>

        {/* ===== Expert Faculty===== */}
        <div className="mb-10">
          <Heading3 headingText={"Expert Faculty"} />
          <p className="my-4">
            Our faculty members are leading experts in their fields, bringing a
            wealth of knowledge and experience to the classroom. With a passion
            for teaching and mentorship, they inspire students to think
            critically, solve problems creatively, and push the boundaries of
            innovation
          </p>
          <p className="my-4">
            Through mentorship, research collaboration, and industry
            partnerships, our faculty members support students in reaching their
            full potential.
          </p>
        </div>
        <Heading3 headingText={"Our Location"} />
        <CollegeAddress />
      </article>
    </div>
  );
};

export default Eee;
