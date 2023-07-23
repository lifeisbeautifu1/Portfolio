import {
  VscDebugAltSmall,
  VscSourceControl,
  VscSearch,
  VscFiles,
  VscExtensions,
  VscSettingsGear,
  VscAccount,
} from "react-icons/vsc";

function Navbar() {
  return (
    <div className="flex h-full w-[72px] flex-col justify-between bg-[#2d2d30]">
      <div>
        <div className="group relative">
          <div className="flex cursor-pointer items-center justify-center border-l-[2px] border-white p-4 text-white transition duration-300 ease-out">
            <VscFiles className="h-8 w-8" />
          </div>

          <span
            className="absolute top-1/2 left-20 z-[20] min-w-max origin-left translate-y-[-50%] scale-0 border-[1px] border-gray-400 bg-[#252526] px-2 py-1.5 text-sm text-gray-400 shadow-md transition-all duration-100 before:absolute before:top-1/2 before:-left-3 before:z-[25] before:w-0 before:translate-y-[-50%] before:border-[6px] before:border-solid
          before:border-t-transparent before:border-l-transparent before:border-b-transparent
          before:border-r-gray-400 before:bg-transparent
            after:absolute after:top-1/2
          after:-left-[9.6px] after:z-50 after:w-0 after:translate-y-[-50%] after:border-[5px] after:border-solid after:border-t-transparent after:border-r-[#252526] after:border-l-transparent after:border-b-transparent
         group-hover:scale-100
          "
          >
            Explorer (⇧⌘E)
          </span>
        </div>
        <div className="group relative">
          <div className="flex cursor-pointer items-center justify-center p-4 text-gray-500 transition duration-300 ease-out hover:text-white">
            <VscSearch className="h-8 w-8" />
          </div>
          <span
            className="absolute top-1/2 left-20 z-[20] min-w-max origin-left translate-y-[-50%] scale-0 border-[1px] border-gray-400 bg-[#252526] px-2 py-1.5 text-sm text-gray-400 shadow-md transition-all duration-100 before:absolute before:top-1/2 before:-left-3 before:w-0 before:translate-y-[-50%] before:border-[6px] before:border-solid before:border-t-transparent before:border-l-transparent before:border-b-transparent before:border-r-gray-400 before:bg-transparent after:absolute after:top-1/2 after:-left-[9.6px]
            after:w-0 after:translate-y-[-50%] after:border-[5px] after:border-solid after:border-t-transparent after:border-r-[#252526] after:border-l-transparent after:border-b-transparent group-hover:scale-100
          "
          >
            Search (⇧⌘F)
          </span>
        </div>
        <div className="group relative">
          <div className="flex cursor-pointer items-center justify-center p-4 text-gray-500 transition duration-300 ease-out hover:text-white">
            <VscSourceControl className="h-8 w-8" />
          </div>
          <span
            className="absolute top-1/2 left-20 z-[20] min-w-max origin-left translate-y-[-50%] scale-0 border-[1px] border-gray-400 bg-[#252526] px-2 py-1.5 text-sm text-gray-400 shadow-md transition-all duration-100 before:absolute before:top-1/2 before:-left-3 before:w-0 before:translate-y-[-50%] before:border-[6px] before:border-solid before:border-t-transparent before:border-l-transparent before:border-b-transparent before:border-r-gray-400 before:bg-transparent after:absolute after:top-1/2 after:-left-[9.6px]
            after:w-0 after:translate-y-[-50%] after:border-[5px] after:border-solid after:border-t-transparent after:border-r-[#252526] after:border-l-transparent after:border-b-transparent group-hover:scale-100
          "
          >
            Source Control (⌃⇧G)
          </span>
        </div>
        <div className="group relative">
          <div className="flex cursor-pointer items-center justify-center p-4 text-gray-500 transition duration-300 ease-out hover:text-white">
            <VscDebugAltSmall className="h-8 w-8" />
          </div>
          <span
            className="absolute top-1/2 left-20 z-[20] min-w-max origin-left translate-y-[-50%] scale-0 border-[1px] border-gray-400 bg-[#252526] px-2 py-1.5 text-sm text-gray-400 shadow-md transition-all duration-100 before:absolute before:top-1/2 before:-left-3 before:w-0 before:translate-y-[-50%] before:border-[6px] before:border-solid before:border-t-transparent before:border-l-transparent before:border-b-transparent before:border-r-gray-400 before:bg-transparent after:absolute after:top-1/2 after:-left-[9.6px]
            after:w-0 after:translate-y-[-50%] after:border-[5px] after:border-solid after:border-t-transparent after:border-r-[#252526] after:border-l-transparent after:border-b-transparent group-hover:scale-100
          "
          >
            Run and Debug (⇧⌘D)
          </span>
        </div>
        <div className="group relative">
          <div className="flex cursor-pointer items-center justify-center p-4 text-gray-500 transition duration-300 ease-out hover:text-white">
            <VscExtensions className="h-8 w-8" />
          </div>
          <span
            className="absolute top-1/2 left-20 z-[20] min-w-max origin-left translate-y-[-50%] scale-0 border-[1px] border-gray-400 bg-[#252526] px-2 py-1.5 text-sm text-gray-400 shadow-md transition-all duration-100 before:absolute before:top-1/2 before:-left-3 before:w-0 before:translate-y-[-50%] before:border-[6px] before:border-solid before:border-t-transparent before:border-l-transparent before:border-b-transparent before:border-r-gray-400 before:bg-transparent after:absolute after:top-1/2 after:-left-[9.6px]
            after:w-0 after:translate-y-[-50%] after:border-[5px] after:border-solid after:border-t-transparent after:border-r-[#252526] after:border-l-transparent after:border-b-transparent group-hover:scale-100
          "
          >
            Extensions (⇧⌘X)
          </span>
        </div>
      </div>
      <div>
        <div className="group relative">
          <div className="flex cursor-pointer items-center justify-center p-4 text-gray-500 transition duration-300 ease-out hover:text-white">
            <VscAccount className="h-8 w-8" />
          </div>
          <span
            className="absolute top-1/2 left-20 z-[20] min-w-max origin-left translate-y-[-50%] scale-0 border-[1px] border-gray-400 bg-[#252526] px-2 py-1.5 text-sm text-gray-400 shadow-md transition-all duration-100 before:absolute before:top-1/2 before:-left-3 before:w-0 before:translate-y-[-50%] before:border-[6px] before:border-solid before:border-t-transparent before:border-l-transparent before:border-b-transparent before:border-r-gray-400 before:bg-transparent after:absolute after:top-1/2 after:-left-[9.6px]
            after:w-0 after:translate-y-[-50%] after:border-[5px] after:border-solid after:border-t-transparent after:border-r-[#252526] after:border-l-transparent after:border-b-transparent group-hover:scale-100
          "
          >
            Accounts
          </span>
        </div>
        <div className="group relative">
          <div className="flex cursor-pointer items-center justify-center p-4 text-gray-500 transition duration-300 ease-out hover:text-white">
            <VscSettingsGear className="h-8 w-8" />
          </div>
          <span
            className="absolute top-1/2 left-20 z-[20] min-w-max origin-left translate-y-[-50%] scale-0 border-[1px] border-gray-400 bg-[#252526] px-2 py-1.5 text-sm text-gray-400 shadow-md transition-all duration-100 before:absolute before:top-1/2 before:-left-3 before:w-0 before:translate-y-[-50%] before:border-[6px] before:border-solid before:border-t-transparent before:border-l-transparent before:border-b-transparent before:border-r-gray-400 before:bg-transparent after:absolute after:top-1/2 after:-left-[9.6px]
            after:w-0 after:translate-y-[-50%] after:border-[5px] after:border-solid after:border-t-transparent after:border-r-[#252526] after:border-l-transparent after:border-b-transparent group-hover:scale-100
          "
          >
            Manage
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
