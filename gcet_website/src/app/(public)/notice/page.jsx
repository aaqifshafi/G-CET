// This is a Client Component that can use hooks
"use client";
import { useEffect, useState } from "react";
import NoticeTable from "./NoticeTable";

const apiURL = process.env.NEXT_PUBLIC_API_HOST;

const Notices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiURL}/notice`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setNotices(data);
        console.log(data);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <NoticeTable notices={notices} />
    </div>
  );
};

export default Notices;
