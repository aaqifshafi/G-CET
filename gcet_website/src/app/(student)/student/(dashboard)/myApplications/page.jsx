import StudentForm from "../components/StudentForm";
import Heading3 from "@/components/Heading3";

const MyApplications = ({ applications }) => {
  return (
    <div className="min-h-fit  sm:mx-2 border-2 rounded-md border-primary-regular overflow-x-auto">
      <h1 className="bg-primary-regular p-2 sm:p-4 text-secondary font-medium">
        Submitted Applications
      </h1>
      <section className="p-4 overflow-hidden">
        <Heading3 headingText={"Admission Forms"} />
        <div className="border  my-4 bg-secondary overflow-x-auto">
          <table className="max-w-full w-full min-w-max">
            <thead>
              <tr className="bg-blue-900 text-secondary">
                <th className="border border-gray-300 px-4 py-2">
                  Application ID
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Student Name
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Roll Number
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Application Date
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Application Status
                </th>
              </tr>
            </thead>
            {/* Fetch DATA FROM BACKEND HERE */}
          </table>

          <div className="h-36 w-full flex justify-center items-center">
            There is not any Application
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyApplications;

//Eg to use data coming from backend
{
  /* <tbody>
{applications.map((application) => (
  <tr key={application.id}>
    <td className="border border-gray-300 px-4 py-2">
      {application.id}
    </td>
    <td className="border border-gray-300 px-4 py-2">
      {application.studentName}
    </td>
    <td className="border border-gray-300 px-4 py-2">
      {application.enrollmentNo}
    </td>
    <td className="border border-gray-300 px-4 py-2">
      {application.applicationDate}
    </td>
    <td className="border border-gray-300 px-4 py-2">
      {application.applicationStatus}
    </td>
  </tr>
))}
</tbody>
</table>
{applications.length === 0 && (
<div className="h-36 w-full flex justify-center items-center">
There is not any Application
</div>
)}
</div>
</section>
</div>
);
};

export default myApplications; */
}
