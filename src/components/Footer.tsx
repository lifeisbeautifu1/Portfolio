import {
  VscSourceControl,
  VscSync,
  VscWarning,
  VscError,
  VscJson,
  VscCheck,
  VscFeedback,
  VscBell,
} from "react-icons/vsc";
import { GrGraphQl } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="flex h-8 w-full items-center justify-between rounded-bl-lg rounded-br-lg  bg-[#007acc] px-2 text-white">
      <div className="flex h-full items-center space-x-3">
        <div className="flex h-full cursor-pointer items-center space-x-2 px-2 text-xl transition ease-out hover:bg-gray-300/20">
          <VscSourceControl />
          <span>main*</span>
        </div>
        <div className="flex h-full cursor-pointer items-center px-2 text-xl transition ease-out hover:bg-gray-300/20">
          <VscSync />
        </div>
        <div className="flex h-full cursor-pointer items-center space-x-1 px-2 text-xl transition ease-out hover:bg-gray-300/20">
          <VscError />
          <span className="text-lg">0</span>
          <VscWarning />
          <span className="text-lg">0</span>
        </div>
      </div>
      <div className="flex h-full items-center space-x-3">
        <div className="flex h-full cursor-pointer items-center space-x-2 px-2 text-lg transition ease-out hover:bg-gray-300/20">
          UTF-8
        </div>
        <div className="flex h-full cursor-pointer items-center space-x-2 px-2 text-xl transition ease-out hover:bg-gray-300/20">
          <VscJson />
          <span className="text-lg">TypeScript React</span>
        </div>
        <div className="flex h-full cursor-pointer items-center space-x-1 px-2 text-xl transition ease-out hover:bg-gray-300/20">
          <GrGraphQl />
        </div>
        <div className="flex h-full cursor-pointer items-center space-x-2 px-2 text-xl transition ease-out hover:bg-gray-300/20">
          <VscCheck />
          <span className="text-lg">Prettier</span>
        </div>
        <div className="flex h-full cursor-pointer items-center space-x-1 px-2 text-xl transition ease-out hover:bg-gray-300/20">
          <VscFeedback />
        </div>
        <div className="flex h-full cursor-pointer items-center space-x-1 px-2 text-xl transition ease-out hover:bg-gray-300/20">
          <VscBell />
        </div>
      </div>
    </footer>
  );
}
