import StudentInfo from "../components/StudentInfo";
import PersonalDetails from "../components/PersonalDetails";
import ContactDetails from "../components/ContactDetails";

const StudentDashboard = () => {
  return (
    <>
      <div className="min-h-fit sm:mx-2 border-2 border-primary-regular rounded-md overflow-x-auto">
        <h1 className="bg-primary-regular p-2 sm:p-4 text-secondary font-medium">
          Student Profile
        </h1>
        <div className="p-3">
          <div className="flex gap-4 flex-col justify-center md:flex">
            <div className="w-full mx-auto overflow-hidden">
              <StudentInfo />
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-fit sm:mx-2 border-2 border-primary-regular rounded-md overflow-x-auto">
        <h1 className="bg-primary-regular p-2 sm:p-4 text-secondary font-medium">
          Contact Details
        </h1>
        <div className="p-3">
          <div className="flex gap-4 flex-col justify-center md:flex">
            <div className="w-full mx-auto overflow-hidden"></div>
            <ContactDetails />
          </div>
        </div>
      </div>
      <div className="min-h-fit sm:mx-2 border-2 border-primary-regular rounded-md overflow-x-auto">
        <h1 className="bg-primary-regular p-2 sm:p-4 text-secondary font-medium">
          Personal Details
        </h1>
        <div className="p-3">
          <div className="flex gap-4 flex-col justify-center md:flex">
            <div className="w-full mx-auto overflow-hidden"></div>
            <PersonalDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
