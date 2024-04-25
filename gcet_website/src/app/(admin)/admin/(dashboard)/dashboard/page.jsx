import Heading3 from "@/components/Heading3";

const AdminDashboard = () => {
  return (
    <div className="min-h-fit  sm:mx-2 border-2 rounded-md border-primary-regular overflow-x-auto">
      <h1 className="bg-primary-regular p-2 sm:p-4 text-secondary font-medium">
        Dashboard
      </h1>

      <section className="p-4 overflow-hidden">
        <Heading3 headingText={"Feedback Received"} />
        <div className="border  my-4 bg-secondary overflow-x-auto">
          <table className="max-w-full w-full min-w-max">
            <thead>
              <tr className="bg-blue-900 text-secondary">
                <th className="border border-gray-300 px-4 py-2">
                  Feedback Id
                </th>
                <th className="border border-gray-300 px-4 py-2">Name</th>

                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Message</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div className="h-36 w-full flex justify-center items-center">
            There is not any Feedback Received
          </div>
        </div>
      </section>
      <section className="p-4 overflow-hidden">
        <Heading3 headingText={"Ghost Complaint"} />
        <div className="border  my-4 bg-secondary overflow-x-auto">
          <table className="max-w-full w-full min-w-max">
            <thead>
              <tr className="bg-blue-900 text-secondary">
                <th className="border border-gray-300 px-4 py-2">
                  Complaint Id
                </th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">
                  Complaint Date
                </th>
                <th className="border border-gray-300 px-4 py-2">Message</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div className="h-36 w-full flex justify-center items-center">
            There is not any Complaint Received
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
