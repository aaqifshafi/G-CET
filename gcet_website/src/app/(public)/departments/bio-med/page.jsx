import Heading2 from "@/components/Heading2";
import Heading3 from "@/components/Heading3";
import CollegeAddress from "@/components/public/CollegeAddress";
import FacultyTable from "@/components/public/FacultyTable";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "Department of Bio-Medical Engineering",
  description:
    "The Department of Bio-Medical Engineering at Government College of Engineering & Technology, Safapora offers a range of undergraduate programs designed to equip students with the skills and knowledge necessary for success in the field of Bio-Medical engineering.",
};

const BioMed = () => {
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
          Department of Bio-Medical Engineering
        </h1>

        <hr />
        <p className="text-lg mt-4">
          <span className="text-4xl text-primary-regular font-bold">W</span>
          elcome to the Department of Biomedical Engineering, where science,
          engineering, and healthcare converge to improve human health and
          well-being. As a leader in biomedical innovation, our department is
          dedicated to educating the next generation of biomedical engineers,
          equipping them with the skills and knowledge to address complex
          healthcare challenges and make a positive impact on society.
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
          Our mission is to advance human health through interdisciplinary
          research, education, and innovation in biomedical engineering. Through
          a blend of biology, engineering, and clinical sciences, we prepare
          students to develop cutting-edge technologies, therapies, and medical
          devices that enhance patient care and quality of life.
        </p>
        {/* ===== Faculty Table ===== */}
        <div className="max-w-full overflow-hidden">
          <div className="border max-w-full overflow-x-auto no-scrollbar my-2">
            <div className="px-4 py-2">
              <h3 className="font-semibold text-2xl ">
                <FontAwesomeIcon
                  className="text-2xl mx-2 text-primary-regular"
                  icon={faStethoscope}
                />{" "}
                Department Staff - Bio-Med
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
            Our faculty members are renowned experts in their fields, bringing a
            wealth of knowledge and experience to the classroom. With
            backgrounds in engineering, biology, and clinical practice, they
            inspire students to think critically, solve problems creatively, and
            innovate in biomedical research and technology.
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

export default BioMed;
