import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { VscDebugAltSmall } from "react-icons/vsc";

function Sidebar() {
  return (
    <div className="h-full w-[72px] bg-[#2d2d30]">
      <div className="flex cursor-pointer items-center justify-center p-4 text-white transition duration-300 ease-out ">
        <HiOutlineDocumentDuplicate className="h-10 w-10" />
      </div>
      <div className="flex cursor-pointer items-center justify-center p-4 text-gray-500 transition duration-300 ease-out hover:text-white">
        <AiOutlineSearch className="h-10 w-10 rotate-[90deg]" />
      </div>
      <div className="flex cursor-pointer items-center justify-center p-4 text-gray-500 transition duration-300 ease-out hover:text-white">
        <BiGitBranch className="h-10 w-10" />
      </div>
      <div className="flex cursor-pointer items-center justify-center p-4 text-gray-500 transition duration-300 ease-out hover:text-white">
        <VscDebugAltSmall className="h-10 w-10" />
      </div>
    </div>
  );
}

export default Sidebar;
