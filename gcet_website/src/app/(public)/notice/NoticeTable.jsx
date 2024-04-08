import React from "react";
import Button from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const NoticeTable = ({ notices }) => {
  return (
    <>
      <div className="max-w-full overflow-hidden">
        <div className="border max-w-full overflow-x-auto no-scrollbar my-4 mb-0">
          <div className="px-4 py-2">
            <h3 className="font-semibold text-2xl ">
              <FontAwesomeIcon
                className="text-2xl mx-2 text-primary-regular"
                icon={faBell}
              />
              All Notifications
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full text-base">
        <table className="w-full min-w-max">
          <thead>
            <tr className="bg-primary-regular text-white">
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice, index) => (
              <tr
                className={`${index % 2 === 1 ? "bg-gray-200" : ""}`}
                key={index}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {notice.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {notice.date}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {notice.category}
                </td>

                <td className="border border-gray-300 px-4 py-2 flex justify-center">
                  <Button href={notice.downloadLink} text={"Download"} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NoticeTable;
