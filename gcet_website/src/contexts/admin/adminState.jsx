import { useState, useEffect } from "react";
import adminContext from "./adminContext";
import { useRouter } from "next/navigation";
const apiURL = process.env.NEXT_PUBLIC_API_HOST;

const AdminState = (props) => {
  const router = useRouter();

  const [isUserLogin, setIsUserLogin] = useState(false);
  const [adminDetails, setAdminDetails] = useState({});
  const [dataFetching, setDataFetching] = useState(true);

  const fetchData = async () => {
    try {
      const authorization =
        sessionStorage.getItem("authorization") ||
        localStorage.getItem("authorization");
      if (!authorization) {
        router.replace("/admin/login");
        return;
      }

      const option = {
        method: "GET",
        headers: {
          authorization,
        },
      };

      const res = await fetch(`${apiURL}/admin/verifyAdmin`, option);

      const data = await res.json();
      if (data.success) {
        console.log(data);
        setDataFetching(false);
        setIsUserLogin(true);
        setAdminDetails(data.teacher);
        console.log(data.admin);
      } else {
        setIsUserLogin(false);
        localStorage.removeItem("authorization");
        sessionStorage.removeItem("authorization");
        router.replace("/admin/login");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setIsUserLogin(false);
      router.replace("/admin/login");
    }
  };

  return (
    <adminContext.Provider
      value={{ isUserLogin, adminDetails, dataFetching, fetchData }}
    >
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </adminContext.Provider>
  );
};

export default AdminState;
