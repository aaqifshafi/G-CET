import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Warring from "./warring";
import { title } from "process";

// Add the Font Awesome icons to the library
library.add(fas);
library.add(fab);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "G-CET Safapora",
  description:
    "Government College of Engineering and Technology is under construction in a beautiful lush green landscape, situated near the banks of world famous Manasbal Lake, in the lap of two beautiful hillocks- with a spectacular ambiance. The college is located at Safapora, Ganderbal, Kashmir. The college is established with the aim to provide quality technical education to the students of Jammu and Kashmir. The college is established with the aim to provide quality technical education to the students of Jammu and Kashmir.",
  openGraph: {
    image: '/open-graph-image.jpg',
    title: "G-CET Safapora",
    description:
      "Government College of Engineering and Technology is under construction in a beautiful lush green landscape, situated near the banks of world famous Manasbal Lake, in the lap of two beautiful hillocks- with a spectacular ambiance. The college is located at Safapora, Ganderbal, Kashmir. The college is established with the aim to provide quality technical education to the students of Jammu and Kashmir. The college is established with the aim to provide quality technical education to the students of Jammu and Kashmir.",

  },

  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  //   maximumScale: 1,
  // },

  twitter: {
    card: 'summary_large_image',
    site: '@aaqifshafi',
    title: 'G-CET Safapora',
    description: "Government College of Engineering and Technology is under construction in a beautiful lush green landscape, situated near the banks of world famous Manasbal Lake, in the lap of two beautiful hillocks- with a spectacular ambiance. The college is located at Safapora, Ganderbal, Kashmir. The college is established with the aim to provide quality technical education to the students of Jammu and Kashmir. The college is established with the aim to provide quality technical education to the students of Jammu and Kashmir",
    image: '/twitter-image.jpg',
  }
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Warring />
        {children}
      </body>
    </html>
  );
}
