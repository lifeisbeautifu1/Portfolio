import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="flex items-center bg-[#191919] text-lg text-gray-300/80 shadow-xl">
      <Link
        href="/"
        className={`flex cursor-pointer items-center py-2.5 px-4 pr-8 ${
          router.pathname === "/"
            ? "bg-[#151515] text-white"
            : "bg-[#1e1e1e] text-gray-300/80"
        }`}
      >
        <Image
          src="/react.svg"
          alt="react"
          className="mr-2"
          width={20}
          height={20}
        />
        Home.jsx
      </Link>
      <Link
        href="/about"
        className={`flex cursor-pointer items-center py-2.5 px-4 pr-8 ${
          router.pathname === "/about"
            ? "bg-[#151515] text-white"
            : "bg-[#1e1e1e] text-gray-300/80"
        }`}
      >
        <Image
          src="/html.svg"
          alt="html"
          className="mr-2"
          width={20}
          height={20}
        />
        about.html
      </Link>
      <Link
        href="/contact"
        className={`flex cursor-pointer items-center py-2.5 px-4 pr-8 ${
          router.pathname === "/contact"
            ? "bg-[#151515] text-white"
            : "bg-[#1e1e1e] text-gray-300/80"
        }`}
      >
        <Image
          src="/css.svg"
          alt="css"
          className="mr-2"
          width={20}
          height={20}
        />
        contact.css
      </Link>
      <Link
        href="/projects"
        className={`flex cursor-pointer items-center py-2.5 px-4 pr-8 ${
          router.pathname === "/projects"
            ? "bg-[#151515] text-white"
            : "bg-[#1e1e1e] text-gray-300/80"
        }`}
      >
        <Image
          src="/js.svg"
          alt="/js"
          className="mr-2"
          width={20}
          height={20}
        />
        projects.js
      </Link>
    </nav>
  );
};

export default Nav;
