import Image from "next/image";
import styles from "./styles.module.css";
import Heading2 from "@/components/Heading2";

const SupportLink = () => {
  const links = [
    {
      id: 1,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMlqtZXsbb9V1fNMIAFHhElYgdaRyD3R_KJNdLfZk-kOieXx96fkALDm33eubrr1AwgQTnlX2bcDbp9qrb5LPCS_5KnVrKb1oCiskgQ3K36xljOUwzoNH_8z9zoM1OdAZdA5QorVuV1fyNaujuvsRUbo86WV_OGKCtUik5ZCxweJp6AQbEYrxZLU7Runkt/w1684-h1069-p-k-no-nu/Cluster_University_of_Srinagar_logo.png",
      alt: "Cluster University of Srinagar",
      href: "https://www.cusrinagar.edu.in/",
    },
    {
      id: 2,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUD0gvBBzRHaEHHGzzYAbv3uvyflIW-p2GemvBplG7Tu61-zn961xrUmEDkDokLY8ZwoeBNmPUngsnDoWFmDEBDvXnEJuULkA1pfw5n5spZN61tfXWTU337557DBHdkKnWfZPx4ezipdIdrO7Sbauk1ODov6gsDOw4_2lxyp2ksaJzxBw7b09NA0dfkBA7/w157-h157/unnamed.png",
      alt: "National Scholarship Portal",
      href: "https://scholarships.gov.in/",
    },
    {
      id: 3,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmShYHP_vfm4FHL68tN0snPLpD7FJbLNqwaY_y3uqwkZVzLeBTgUU_KMI7XFFvLIJ-8CjYfuDMXD9fSqnfbpdlwWRmrR0fDLNzU6lxC_AhyphenhyphendQoqR9rrNTk-Xd96dOL5uhKmP1c2kZnkpULg1SVPglVURsLlJbt7g12BEgVtDZjfzafyMySjbQSupYGX8Y/s180/digilocker_logo.png",
      alt: "DigiLocker",
      href: "https://www.digilocker.gov.in/",
    },
    {
      id: 4,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvq2bwST50y8Fll14jKx2MamEzjjMDP8E3HEe1hhvyS7sHc39rZWzZ_qYa3tzP4H2X0Wgw6fZwK0k3l2XGiVbJxVM2wnImO3yU98psfqneHGdPiPA4xFeJqb_P6GcNpLTtr3Dh6mm-poSbM34iz1RiQXnFz3K62B4nCv42R9HpHT3OP2f1QYi0lBqkXBA/s512/digital-india.png",
      alt: "Digital India",
      href: "https://digitalindia.gov.in/",
    },
    {
      id: 5,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2b1p4qe8p7J_K-PD7XlNBGd-skFY_sjKLSCCPSgYAHWL2Ofbx0J5JAwXt2pTQO4esQEmb8RATd-TcRgsvdyWfRjIJYWyQOt4KRsY4WIJPhXdbDvRgGc7GHTdgNd_yFXpEK4oixLgaoPozzAkO75FJkoc7QzfVsFQMvDe8wKPEZqo3w1l9qhgeg2_wDDs/s329/UGC_Logo.png",
      alt: "UGC",
      href: "https://www.ugc.gov.in/",
    },
    {
      id: 6,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJY2WwEGT_1W4KPdD8AOOnkuejbyMStdb845dzixkWM570cRTcTxY08uA-WIcBlOmt-cFgSi6Q4nQtmKSlLi6DXkI2CnL1yyzt1L_4j27dGxmPm86Fv-oJPVLqgdbsaJ0Wq8wqdp_UHt8N-1Nl6cYCeHr9D3XxF1pJYZe0fWfKwZ1EmiAZ6QztVeys69Y/s327/india-gov.png",
      alt: "India.gov.in",
      href: "https://www.india.gov.in/",
    },
    {
      id: 7,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWddUMgjAOj3Yli-sZtrbNHSJG4p_cLU1lBNiOx7wcByDLyPTbZmhtPAPJ4jtVBOVenM0Ml9935vfQqWNDiye_1dERdwvqC0kfZS3QwbnG_5EOcR9H1Y6cCcFRHB9juMe42e18NZfI4szDx0H6DHZ4ua7PQibFSdeGXtGQgOZxWtfQHF0u9srBiblf7bY/s300/my-gov.webp",
      alt: "My Gov",
      href: "https://www.mygov.in/",
    },
    {
      id: 8,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaW4hLVCorHgkUY65D6b20NVIAlkVKWBafJ1DnUk4QDVGMbmK4o41R0jmDE9Ju0KWDfd64NM4ktTcsASwT-pPXJ1e6H9k75blivk7e168Jd6FGq4fkeAEf4noKG69JvlRLPuDmVQVBZMPKKtj66kxgwI5Xu-QTeflFEf7srmKJ27qKGYSb02AViJxzfLC1/s320/Seal_of_Jammu_and_Kashmir_color.png",
      alt: "J&K gov",
      href: "https://jk.gov.in/jammukashmir/",
    },
  ];
  return (
    <section className="my-8">
      <div className="max-w-screen-xl mx-auto p-3 overflow-hidden">
        <Heading2 headingText={"Quick Links"} />
        <div
          className={`${styles.linkImage} m-3 flex items-center gap-8 min-w-fit`}
        >
          {links.map((link) => (
            <a
              className="h-36 w-36 flex items-center"
              key={link.id}
              href={link.href}
              referrerPolicy="no-referrer"
              target="_blank"
            >
              <Image src={link.src} alt={link.alt} height={120} width={120} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportLink;
