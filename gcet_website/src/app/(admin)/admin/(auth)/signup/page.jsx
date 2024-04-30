import Heading2 from "@/components/Heading2";
import Image from "next/image";
import SignUpForm from "./components/Form";
import styles from "../login/styles.module.css";

export const metadata = {
  title: "Faculty Registration- GCET",
  description:
    "GCET Safapora, Ganderbal, Kashmir offers Undergraduate programme (B.Tech. in Core branches of Engineering). The admission to B. Tech. is dome through Common Entrance Test conducted by Board of Professional Entrance Examination (BOPEE), J&K Govt. I look forward to put our integrated efforts together and receive the cooperation from teachers, parents, students, to achieve academic excellence. We will focus on preparing industry-ready and employable engineers capable of offering technological solutions for the problems faced by the local society which will eventually lead to the inventions, innovations and of course the Patents-which shall form our significant ‘academic progress indicator’.",
};

const SignUp = () => {
  return (
    <div className={`${styles.main} relative`}>
      <div className="z-10 relative">
        <div className="max-w-screen-xl mx-auto py-8 px-3 ">
          <div className="bg-white p-4 max-w-fit mx-auto flex flex-col items-center rounded-sm shadow-lg ">
            <Image
              src="/mcc-icon.png"
              alt="G-CET Logo"
              width={100}
              height={100}
            />
            <Heading2 headingText="Faculty Registration" />
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
