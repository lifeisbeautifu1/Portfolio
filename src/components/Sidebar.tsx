import Link from "next/link";
import Image from "next/image";
import { forwardRef } from "react";
import { VscEllipsis, VscChevronDown } from "react-icons/vsc";
import { Disclosure, Transition } from "@headlessui/react";

const Sidebar = forwardRef<HTMLDivElement>(function Sidebar(props, ref) {
  return (
    <div
      ref={ref}
      className="h-full w-[320px] min-w-[240px] max-w-[720px] flex-shrink-0 select-none border-l border-b border-t border-zinc-600 bg-[#1e1e1e] shadow"
    >
      <div className="flex items-center justify-between py-2.5 pr-5 pl-7 text-gray-300/80">
        <p className="uppercase">Explorer</p>
        <div className="cursor-pointer rounded px-1 py-1 text-2xl hover:bg-gray-600/30">
          <VscEllipsis />
        </div>
      </div>
      <div>
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full cursor-pointer py-2 font-bold uppercase text-gray-300">
                <div className="flex items-center pl-2">
                  <VscChevronDown
                    className={`duratio-300 text-2xl transition ease-out ${
                      open ? "" : "-rotate-90"
                    }`}
                  />
                  <p className="pl-1">PORTFOLIO</p>
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="flex flex-col text-gray-300">
                  <Link
                    href="/"
                    className="flex items-center px-9 py-0.5 hover:bg-gray-700/20"
                  >
                    <Image
                      src="/react.svg"
                      className="mr-2 object-cover"
                      width={20}
                      height={20}
                      alt="About"
                    />
                    Home.jsx
                  </Link>
                  <Link
                    href="/about"
                    className="flex px-9 py-0.5 hover:bg-gray-700/20"
                  >
                    <Image
                      src="/html.svg"
                      className="mr-2 object-cover"
                      width={20}
                      height={20}
                      alt="html"
                    />
                    about.html
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center px-9 py-0.5 hover:bg-gray-700/20"
                  >
                    <Image
                      src="/css.svg"
                      className="mr-2 object-cover"
                      width={20}
                      height={20}
                      alt="About"
                    />
                    contact.css
                  </Link>
                  <Link
                    href="/projects"
                    className="flex items-center px-9 py-0.5 hover:bg-gray-700/20"
                  >
                    <Image
                      src="js.svg"
                      className="mr-2 object-cover"
                      width={20}
                      height={20}
                      alt="About"
                    />
                    projects.js
                  </Link>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
});

export default Sidebar;
