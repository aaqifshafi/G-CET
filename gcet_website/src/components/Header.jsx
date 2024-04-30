import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const Header = ({ href, text }) => {
  return (
    <header className="bg-gradient-to-br from-blue-950 to-blue-900 p-8 shadow-md">
      <nav className="max-w-screen-xl mx-auto my-3 flex items-center gap-8 flex-col justify-center sm:flex-row sm:justify-between">
        <div className="w-full py-2 px-4">
          <div className="flex justify-between max-w-screen-xl items-center mx-auto w-full">
            <Link href={"/"}>
              <Image src={"/logo.webp"} alt="G-CET" width={400} height={119} />
            </Link>
            <div className="hidden md:block">
              <Button href={href} text={text} />
            </div>
          </div>
        </div>
        <ul className="flex gap-8 text-white">
          <li>
            <Link className="hover:underline duration-500" href={"/"}>
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
