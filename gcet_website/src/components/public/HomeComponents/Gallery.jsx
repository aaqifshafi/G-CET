import Heading2 from "@/components/Heading2";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  return (
    <section className="my-6">
      <div className="max-w-screen-xl mx-auto container p-3 flex flex-wrap">
        <div className=" w-full mb-20 flex-wrap">
          <Heading2 headingText={"Gallery"} />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
            <FontAwesomeIcon
              className="text-gray-400 text-xl mx-1"
              icon={faQuoteLeft}
            />
            Explore the essence of our college through captivating images, where
            every picture tells a story of knowledge, growth, and unforgettable
            memories.
            <FontAwesomeIcon
              className="text-gray-400 text-xl mx-1"
              icon={faQuoteRight}
            />
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap md:w-1/2">
            <div className={`md:p-2 p-1 w-1/2`}>
              <Image
                alt="gallery"
                className={` w-full object-cover h-full object-center block`}
                width={250}
                height={150}
                src={
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFSV-adWa-ZhY5TPPWsSNOJBCCIERDcS9k69OzzgLe5kxvyV3KcPXqV4LuCnTut6YWa2OXs7IH7dUL0-gRwhyphenhyphen1ZIeiWNM5fpRnibTyilieUEA-N7FtLpAq24z2p54KwXiInSZC5Pf0BzLTcJh84jiCoEGm0exPgTV5Mdr4_U1MOTyehGwSVbFUdX0T66h9/w1684-h1069-p-k-no-nu/DSC_0008.jpeg"
                }
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                width={250}
                height={150}
                src={
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmX6p9rXQRcBQHupO2ya43X8GiRCvMzPSqvk4ZE_sPyRilUre_aSxXcHhsJ4ZG7u86iiCwoAKCGIdSfutxSG2JTYH163OqtWG0yEG8wOBb1Gp62XKkhcq0BI8wapI2UytNLUbkMqR34w2Hq3NXAoLEjlX8HvRDEqvs7LEsHzIbJ4jOzbAv4YUEkjjUZ3OX/s320/376254058_209356571910186_728815461775279720_n.webp"
                }
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-60 lg:h-80 object-cover object-center block"
                src={
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1j4WWLywaxCGna-lVGSBW-CqHctr6WXTwlHqm_npPiVojG0R6OL9n78vVl6UCwoOOcadOmnEcymWf87FhU-Q8CDHccwkZBvepVQ_bAFYDePiOGa_uWR_e_Uj_tv3wzxVpjUyphxN2d82bKEo3mQlDeWU1n0IB7c-_9ulIpE6nikCZQ5zfD62b58z_lJOk/s320/DSC_0025.jpeg"
                }
                width={500}
                height={300}
              />
            </div>
          </div>
          {/* ========= */}
          <div className={` flex flex-wrap md:w-1/2`}>
            <div className=" md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-60 lg:h-80 object-cover object-center block"
                src={
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit2KMdF7GC_FQxHH_vV7fPU0t2aStv-qmOp8qcNGK2s8De8VmwRJ93_PvIePjMiwIaNZOedtnZ3JXM9kUNk-WOmsg_OLHMierkFmM6Fa_7Jd2AfgS7vu4mupcCtvfjLWp_3ydGfGfoFRJMLc6m7Pa5tZGzj-vjNkJvzdyPVeURgMp5FlaBAUXMrWqRTdvp/s320/DSC_0029.jpeg"
                }
                height={300}
                width={500}
              />
            </div>

            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPjlqq9tiihkBriKNoBBLo0KlnQVEO5YckdR5zuD3bL6tRLScDTToL5rZXAphrzt4-3-zl-z_hdvDPMXlKZJO26hYM_VrLfyA9XhTl9lO9Y-oqxLi9bzT2ftK2bpqPtNjtn9hknsAb8XpzmTbRTDSTF3LBETjEZjl_hpWYaY2NZujsQKV0TZMa2jsmx0zZ/s6000/DSC_0023.jpeg"
                }
                width={250}
                height={150}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWYqk5xJB0BkPBAFxfa_fjnjKgi6VPBGG1JyxOCL0mO7r7h2eoGc7F-H6cqJp8DZpXba9awUEYBnKSje98d2BZpRHixOSVHefvl6gJijhoNIyMjAUmLzKwd31MhSE-rchIwLzgjvfQL5_Gs7dkksBQ1gnRN3ImfDiM-jZKYwkk7uQ2-dx_0U8huzakt_1e/s320/344802370_2695346470606652_1734411409558325719_n.webp"
                }
                width={250}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
