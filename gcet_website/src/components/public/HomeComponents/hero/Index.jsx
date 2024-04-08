import Button from "@/components/Button";
import styles from "./styles.module.css";

const Hero = () => {
  return (
    <section
      className={`${styles.hero} max-h-[600px] lg:max-h-[800px] min-h-[600px] md:min-h-[600px] h-[95vh] p-3`}
    >
      <div className="flex flex-col gap-4 justify-center h-full max-w-screen-xl mx-auto text-white">
        {/* ========== Section Text START ========== */}
        <h2 className="flex flex-col text-4xl md:text-5xl lg:text-6xl leading-[3rem] md:leading-[4rem] lg:leading-[5rem] font-bold ">
          <span className={`${styles.slideRightAnimation} tracking-wider`}>
            Under Construction
          </span>
          <span className={`${styles.slideRightAnimation} tracking-wider`}>
            Website
          </span>
          Write Info
          <span className={`${styles.slideRightAnimation} tracking-wider`}>
            Here!
          </span>
        </h2>
        <p className={`${styles.slideUpAnimation} leading-8 my-4 max-w-sm`}>
          Write a small Tag line here !!!!!
        </p>

        <div className={`${styles.slideUpAnimation} my-8`}>
          <Button text={"EXPLORE &rarr;"} href={"#"} />
        </div>
        {/* ========== Section Text END ========== */}
      </div>
    </section>
  );
};

export default Hero;
