// import styles from "./styles.module.css";
import FacultyTable from "@/components/public/FacultyTable";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// set api url to make api calls
const apiURL = process.env.NEXT_PUBLIC_API_HOST;

const Faculty = () => {
  //TODO: fetch faculty form database
  const staff = [
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
      name: "Dr. Mudasir Ashraf",
      qualification: "PhD",
      designation: "Librarain",
    },
  ];

  return (
    <div className="max-w-full overflow-hidden m-4">
      <div className="border max-w-full overflow-x-auto no-scrollbar ">
        <h5 className="font-semibold text-2xl border-b border-primary-regular px-4 py-2">
          <FontAwesomeIcon
            className="text-2xl mx-2 text-primary-regular"
            icon={faPeopleGroup}
          />{" "}
          Our Faculty
        </h5>
        <div className="w-full">
          <FacultyTable staff={staff} />
        </div>
      </div>
    </div>
  );
};

export default Faculty;
