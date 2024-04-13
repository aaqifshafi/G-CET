import Image from "next/image";
import Form from "./components/Form";
import Link from "next/link";
import styles from "./styles.module.css";

export const metadata = {
  title: "Student Login Portal - G-CET, Safapora",
  description:
    "GCET Safapora, Ganderbal, Kashmir offers Undergraduate programme (B.Tech. in Core branches of Engineering). The admission to B. Tech. is dome through Common Entrance Test conducted by Board of Professional Entrance Examination (BOPEE), J&K Govt. I look forward to put our integrated efforts together and receive the cooperation from teachers, parents, students, to achieve academic excellence. We will focus on preparing industry-ready and employable engineers capable of offering technological solutions for the problems faced by the local society which will eventually lead to the inventions, innovations and of course the Patents-which shall form our significant ‘academic progress indicator’.",
};

const Login = () => {
  return (
    <div className={`${styles.main} relative`}>
      <div className="max-w-screen-xl mx-auto px-3 py-16">
        <div className="flex flex-col max-w-sm mx-auto border rounded-sm px-4 py-6 items-center justify-center bg-white shadow-2xl shadow-blue-900">
          <Image src={"/mcc-icon.png"} alt={"G-CET"} width={100} height={100} />
          <Form />
          <div className="my-3 text-gray-500 w-full flex justify-center flex-col text-center items-center">
            <span className="block border-b w-full relative -bottom-4  "></span>
            <span className="bg-white w-fit p-1 relative z-10">or</span>
          </div>
          <Link
            className="duration-500 bg-primary-regular py-2 px-4 w-full text-center text-white hover:underline font-medium"
            href="/student/signup"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
