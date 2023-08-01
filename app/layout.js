import "./globals.css";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Chat APP",
  description:
    "https://www.frontendmentor.io/challenges/chat-app-css-illustration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#e9e9e9]">
      <body className={`${rubik.className}`} flex>
        {/* md or more */}
        <div className="hidden md:block h-[1200px] w-[650px] absolute -top-60 -left-32 bg-gradient-to-b from-grad_start to-grad_end rounded-b-full"></div>
        {/* less than md */}
        <div className="block md:hidden h-[940px] w-[480px] absolute -top-60 -left-[290px] bg-gradient-to-b from-grad_start to-grad_end rounded-b-full"></div>
        {children}
      </body>
    </html>
  );
}
