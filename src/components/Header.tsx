import { AiOutlineMinus } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { BsChevronExpand } from "react-icons/bs";

export default function Header() {
  return (
    <header className="rounded-tl-lg rounded-tr-lg bg-[#3e3e42] p-3">
      <div className="group flex items-center space-x-2">
        <div className="flex h-3 w-3 cursor-pointer items-center justify-center rounded-full bg-red-500">
          <IoMdClose className="hidden text-[10px] group-hover:block" />
        </div>
        <div className="flex h-3 w-3 cursor-pointer items-center justify-center rounded-full bg-yellow-500">
          <AiOutlineMinus className="hidden text-[10px] group-hover:block" />
        </div>
        <div className="flex h-3 w-3 cursor-pointer items-center justify-center rounded-full bg-green-500">
          <BsChevronExpand className="hidden -rotate-45 text-[10px] group-hover:block" />
        </div>
      </div>
    </header>
  );
}
