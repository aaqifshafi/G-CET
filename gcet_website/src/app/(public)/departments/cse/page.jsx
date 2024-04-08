import Heading2 from "@/components/Heading2";
import Heading3 from "@/components/Heading3";
import CollegeAddress from "@/components/public/CollegeAddress";
import FacultyTable from "@/components/public/FacultyTable";
import {
  faBookOpen,
  faBusinessTime,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "Department of Computer Science & Engineering",
  description:
    "The Department of Computer Science & Engineering at Government College of Engineering & Technology, Safapora offers a range of undergraduate programs designed to equip students with the skills and knowledge necessary for success in the field of computer science and engineering.",
};

const Cse = () => {
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
          Department of Computer Science & Engineering
        </h1>

        <hr />
        <p className="text-lg mt-4">
          <span className="text-4xl text-primary-regular font-bold">A</span>t
          the heart of technological innovation lies the Department of Computer
          Science and Engineering (CSE) at our esteemed college. Our department
          is committed to nurturing future leaders in the field of computing,
          equipping them with the skills and knowledge required to thrive in a
          rapidly evolving digital landscape.
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
          Our mission is to provide a comprehensive and rigorous education in
          computer science and engineering, empowering students to tackle
          real-world challenges and make meaningful contributions to society.
          Through a blend of theoretical foundations and hands-on experience, we
          strive to foster creativity, critical thinking, and problem-solving
          skills among our students.
        </p>
        {/* ===== Faculty Table ===== */}
        <div className="max-w-full overflow-hidden">
          <div className="border max-w-full overflow-x-auto no-scrollbar my-2">
            <div className="px-4 py-2">
              <h3 className="font-semibold text-2xl ">
                <FontAwesomeIcon
                  className="text-2xl mx-2 text-primary-regular"
                  icon={faComputer}
                />{" "}
                Department Staff - CSE
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
            Our department boasts a team of renowned faculty members who are
            experts in their respective fields. With their diverse expertise and
            passion for teaching, they inspire and mentor students, guiding them
            on their academic and professional journeys.
          </p>
          <p className="my-4">
            From conducting groundbreaking research to organizing workshops and
            seminars, our faculty members are committed to fostering a culture
            of excellence and innovation.
          </p>
        </div>
        <Heading3 headingText={"Our Location"} />
        <CollegeAddress />
      </article>
    </div>
  );
};

export default Cse;
