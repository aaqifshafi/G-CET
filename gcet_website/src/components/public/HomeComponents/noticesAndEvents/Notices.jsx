import Button from "@/components/Button";
import Notice from "@/components/public/HomeComponents/noticesAndEvents/NoticeItem";
import styles from "./styles.module.css";

// set api url to make api calls
const apiURL = process.env.NEXT_PUBLIC_API_HOST;

const Notices = () => {
  //TODO: fetch notices form database
  const notices = [
    {
      category: "Sports",
      title: "Table tennis tournament",
      date: "29 Mar 2024",
      description: "College announce table tennis tournament for students",
      downloadLink: "/notice/download",
      detailsLink: "",
    },
    {
      category: "Library",
      title: "Library will remain close on 01 April 2024",
      date: "30 Mar 2024",
      description:
        "Library will remain close on 01 April 2024 due to yearly audit",
      downloadLink: "/notice/download",
      detailsLink: "",
    },
    {
      category: "Tender",
      title: "Tenders invited for construction of indoor stadium",
      date: "29 Mar 2024",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "/notice/download",
      detailsLink: "",
    },

    {
      category: "Date Sheet",
      title: "Sem-6 (2020-24) Date Sheet",
      date: "31 Mar 2024",
      description: "Datesheet for Sem-6 (2020-24) is released",
      downloadLink: "/notice/download",
      detailsLink: "",
    },
    {
      category: "Exam",
      title: "Sem-6 (2020-24) Internal Exam",
      date: "31 Mar 2023",
      description: "Exam Notification for Sem-6 (2020-24) Internal Exam",
      downloadLink: "/notice/download",
      detailsLink: "",
    },
  ];

  return (
    <div className={`${styles.noticeList} grid gap-6 m-4`}>
      {notices.map((notice, index) => (
        <Notice
          key={index}
          category={notice.category}
          title={notice.title}
          date={notice.date}
          description={notice.description}
          downloadLink={apiURL + notice.downloadLink}
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
