import Heading2 from "@/components/Heading2";
import Heading3 from "@/components/Heading3";
import CollegeAddress from "@/components/public/CollegeAddress";
import FacultyTable from "@/components/public/FacultyTable";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "Department of Bio-Medical Engineering",
  description:
    "The Department of Mechanical Engineering at Government College of Engineering & Technology, Safapora offers a range of undergraduate programs designed to equip students with the skills and knowledge necessary for success in the field of Mechanical engineering.",
};

const Mech = () => {
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
          Department of Mechanical Engineering
        </h1>

        <hr />
        <p className="text-lg mt-4">
          <span className="text-4xl text-primary-regular font-bold">W</span>
          elcome to the Department of Mechanical Engineering, where innovation,
          design, and precision engineering converge to shape the world around
          us. As a hub of creativity and technical expertise, our department is
          dedicated to educating the next generation of mechanical engineers,
          equipping them with the skills and knowledge to tackle complex
          challenges and drive advancements in technology.
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
          Our mission is to provide a transformative education in mechanical
          engineering, grounded in principles of innovation, sustainability, and
          societal impact. Through a rigorous curriculum, hands-on learning
          experiences, and cutting-edge research, we empower students to become
          leaders in the field, solving real-world problems and contributing to
          the advancement of engineering science and technology.
        </p>
        {/* ===== Faculty Table ===== */}
        <div className="max-w-full overflow-hidden">
          <div className="border max-w-full overflow-x-auto no-scrollbar my-2">
            <div className="px-4 py-2">
              <h3 className="font-semibold text-2xl ">
                <FontAwesomeIcon
                  className="text-2xl mx-2 text-primary-regular"
                  icon={faWrench}
                />{" "}
                Department Staff - Mechanical
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
            critically, solve problems creatively, and innovate in mechanical
            design and analysis.
          </p>
          <p className="my-4">
            Through mentorship, research collaboration, and industry
            partnerships, our faculty members support students in pursuing their
            academic and professional goals.
          </p>
        </div>
        <Heading3 headingText={"Our Location"} />
        <CollegeAddress />
      </article>
    </div>
  );
};

export default Mech;
