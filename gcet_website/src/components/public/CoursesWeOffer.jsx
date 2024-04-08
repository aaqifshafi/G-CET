import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CoursesWeOffer = () => {
  return (
    <div className="max-w-full overflow-hidden">
      <div className="border max-w-full overflow-x-auto no-scrollbar my-12">
        <h5 className="font-semibold text-2xl border-b border-primary-regular px-4 py-2">
          <FontAwesomeIcon
            className="text-2xl mx-2 text-primary-regular"
            icon={faFlask}
          />{" "}
          Bachelor of Technology (B.Tech)
        </h5>

        <div className="w-full">
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-primary-regular text-white">
                <th className="border border-gray-300 px-4 py-2">Streams</th>
                <th className="border border-gray-300 px-4 py-2">Mode</th>
                <th className="border border-gray-300 px-4 py-2">Duration</th>
                <th className="border border-gray-300 px-4 py-2">Edibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Computer Science & Engineering (CSE)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  4 Years (8 Semesters)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  10+2 with 50%
                </td>
              </tr>

              <tr className="bg-gray-200">
                <td className="border border-gray-300 px-4 py-2">
                  Civil Engineering (CE)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  4 Years (8 Semesters) <br />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  10+2 with 50%
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Mechanical Engineering (ME)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  4 Years (8 Semesters) <br />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  10+2 with 50%
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Bio-Medical Engineering (BME)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  4 Years (8 Semesters) <br />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  10+2 with 50%
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Electrical Engineering (EE)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  4 Years (8 Semesters) <br />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  10+2 with 50%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CoursesWeOffer;
