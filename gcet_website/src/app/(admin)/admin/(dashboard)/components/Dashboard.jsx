"use client";
import Heading3 from "@/components/Heading3";
import { useContext } from "react";
import adminContext from "@/contexts/admin/adminContext";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { feedback } = useContext(adminContext);
  const url = process.env.NEXT_PUBLIC_API_HOST;
  function ifGhostComplaint(feedbackItem) {
    return !feedbackItem.name; // Check if name field is empty
  }
  const router = useRouter();
  const convertToLocalDate = (timestampString) => {
    return new Date(timestampString);
  };

  const ghostComplaints = feedback.filter(ifGhostComplaint);
  const nonGhostComplaints = feedback.filter(
    (feedbackItem) => !ifGhostComplaint(feedbackItem)
  );
  const handleClick = async (feedbackId) => {
    try {
      const response = await fetch(`${url}/admin/updateStatus/${feedbackId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        location.reload();
      } else {
        throw new Error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  return (
    <div className="min-h-fit  sm:mx-2 border-2 rounded-md border-primary-regular ">
      <h1 className="bg-primary-regular p-2 sm:p-4 text-secondary font-medium ">
        Dashboard
      </h1>
      <div className="p-4 overflow-x-auto">
        <div className="mb-3">
          <Heading3 headingText={"Feedback Received"} />
        </div>

        <table className="max-w-full w-full min-w-max">
          <thead>
            <tr className="bg-blue-900 text-secondary">
              <th className="border border-gray-300 px-4 py-2">Feedback Id</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Message</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {nonGhostComplaints.map((feedbackItem) => (
              <tr key={feedbackItem._id}>
                <td className="border border-gray-300 px-4 py-2">
                  {feedbackItem.feedbackId}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {feedbackItem.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {feedbackItem.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {convertToLocalDate(
                    feedbackItem.createdAt
                  ).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {feedbackItem.feedback}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {feedbackItem.status ? "Resolved" : "Pending"}
                </td>
                {!feedbackItem.status ? (
                  <td className="border border-gray-300 p-2">
                    <button
                      className="bg-primary-regular text-xs text-secondary p-2 rounded-full"
                      onClick={() => handleClick(feedbackItem.feedbackId)}
                    >
                      Mark Resolved
                    </button>
                  </td>
                ) : (
                  <td className="border border-gray-300 px-4 py-2">Closed</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {nonGhostComplaints.length === 0 && (
          <div className="h-36 w-full flex justify-center items-center">
            There are no non-ghost complaints
          </div>
        )}
      </div>
      <div className="p-4 overflow-x-auto shadow">
        <div className="mb-3">
          <Heading3 headingText={"Ghost Complaint"} />
        </div>

        <table className="max-w-full w-full min-w-max">
          <thead>
            <tr className="bg-blue-900 text-secondary">
              <th className="border border-gray-300 px-4 py-2">Complaint Id</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">
                Complaint Date
              </th>
              <th className="border border-gray-300 px-4 py-2">Message</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {ghostComplaints.map((feedbackItem) => (
              <tr key={feedbackItem._id}>
                <td className="border border-gray-300 px-4 py-2">
                  {feedbackItem.feedbackId}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {feedbackItem.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {convertToLocalDate(
                    feedbackItem.createdAt
                  ).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {feedbackItem.feedback}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {feedbackItem.status ? "Resolved" : "Pending"}
                </td>
                {!feedbackItem.status ? (
                  <td className="border border-gray-300 p-2">
                    <button
                      className="bg-primary-regular text-xs text-secondary p-2 rounded-full"
                      onClick={() => handleClick(feedbackItem.feedbackId)}
                    >
                      Mark Resolved
                    </button>
                  </td>
                ) : (
                  <td className="border border-gray-300 px-4 py-2">Closed</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {ghostComplaints.length === 0 && (
          <div className="h-36 w-full flex justify-center items-center">
            There are no ghost complaints
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
