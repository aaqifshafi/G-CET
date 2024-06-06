import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Heading2 from "@/components/Heading2";

const PrincipleMsg = () => {
  return (
    <section className="bg-gray-100 py-8">
      <Heading2 headingText={"Principal Message"} />
      <div className="max-w-screen-md grid md:grid-cols-2 gap-16 mx-auto p-3">
        <div className="grid h-full w-full rounded-lg overflow-hidden">
          <div className="h-full w-full overflow-hidden">
            <Image
              className="w-full hover:scale-110 duration-500 cursor-pointer"
              src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
              height={300}
              width={100}
              alt="G-CET principal"
            />
          </div>

          <p className=" cursor-pointer bg-primary-regular text-center p-2 w-full text-white font-semibold">
            Principal G-CET
          </p>
        </div>

        <div className="animation-on-scroll flex justify-center flex-col">
          <FontAwesomeIcon
            className="text-5xl text-slate-400"
            icon={faQuoteLeft}
          />
          <p className="text-center">
            Welcome to GCET Safapora, where innovation meets excellence on the
            serene banks of Manasbal Lake. As Principal, I'm proud to foster a
            dynamic learning environment that prepares our students for success
            in engineering and beyond. Join us in shaping tomorrow's leaders
            through cutting-edge education and holistic development.
          </p>
          <div className="text-right my-4">
            <p className="font-semibold">Principal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipleMsg;
