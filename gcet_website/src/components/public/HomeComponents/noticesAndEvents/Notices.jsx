"use client";
import Button from "@/components/Button";
import Notice from "@/components/public/HomeComponents/noticesAndEvents/NoticeItem";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

// set api url to make api calls
const apiURL = process.env.NEXT_PUBLIC_API_HOST;

const Notices = () => {
  const [notices, setNotices] = useState([]);
  //TODO: fetch notices form database
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
  const convertToLocalDate = (timestampString) => {
    return new Date(timestampString);
  };
  return (
    <div className={`${styles.noticeList} grid gap-6 m-4`}>
      {notices.map((notice, index) => (
        <Notice
          key={index}
          category={notice.category}
          title={notice.title}
          date={convertToLocalDate(notice.date).toLocaleDateString()}
          description={notice.description}
          downloadLink={notice.downloadLink}
          detailsLink={notice.detailsLink}
        />
      ))}
      <div className="mx-auto w-fit">
        <Button text={"Read Mode &rarr;"} href={"/notice"} />
      </div>
    </div>
  );
};

export default Notices;
