import AdminInfo from "../components/AdminInfo";
import Dashboard from "../components/Dashboard";

const AdminDashboard = () => {
  return (
    <>
      <div className="min-h-fit sm:mx-2 border-2 border-primary-regular rounded-md overflow-x-auto mb-4">
        <h1 className="bg-primary-regular p-2 sm:p-4 text-secondary font-medium">
          Employee Profie
        </h1>
        <div className="p-3">
          <div className="flex gap-4 flex-col justify-center md:flex">
            <div className="w-full mx-auto overflow-hidden">
              <AdminInfo />
            </div>
          </div>
        </div>
      </div>
      <Dashboard />
    </>
  );
};

export default AdminDashboard;
