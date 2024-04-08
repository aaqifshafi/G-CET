const ImportantLink = () => {
  const impLinks = [
    {
      text: "» NSP Scholarship",
      path: "https://scholarships.gov.in/",
    },
    {
      text: "» Exam Form - Cluster University of Srinagar",
      path: "https://www.cusrinagar.edu.in/CUStudentZone/",
    },
    {
      text: "» Latest Noftifications - Cluster University of Srinagar",
      path: "https://www.cusrinagar.edu.in/Notification/Notification",
    },
    {
      text: "» Download Admit Card - Cluster University of Srinagar",
      path: "https://www.cusrinagar.edu.in/CUStudentZone/",
    },
    {
      text: "» Academic Bank of Credits (abc id)",
      path: "https://www.abc.gov.in/",
    },

    {
      text: "» Check Result - Cluster University of Srinagar",
      path: "https://www.cusrinagar.edu.in/Result/ResultNotification?Program=IH",
    },
    {
      text: "» University Grants Commission (UGC)",
      path: "https://www.ugc.ac.in/",
    },
  ];
  return (
    <div className="grid my-4">
      {impLinks.map((link, index) => (
        <div
          className="border-t border-b border-white w-full p-4 animation-on-scroll"
          key={index}
        >
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            className="block duration-500 relative hover:translate-x-4"
            href={link.path}
          >
            {link.text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImportantLink;
