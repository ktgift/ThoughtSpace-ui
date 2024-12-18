import {
  Bars3Icon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import logo from "../../assets/image/logo-wh.png";
import { Const } from "../../constants";
import { ThemeSwitcher } from "./Theme";
import { useCommonStore } from "../../stores";

export const HeaderBar = () => {
  const { openMenu, updateOpenMenu } = useCommonStore();



  return (
    <div className="flex justify-between items-center h-[60px] bg-primary text-white">
      <div className="flex items-center md:ml-6">
        {/* hamburger btn */}
        <button 
          className="btn btn-ghost btn-xs sm:hidden"
          onClick={() => updateOpenMenu(!openMenu)}
        >
          <Bars3Icon className="h-6" />
        </button>

        {/* logo */}
        <img src={logo} alt="logo" className="h-12" />
        <h1 className="text-2xl font-bold ml-2 mr-4 hidden sm:flex">
          {Const.nameProject}
        </h1>
        <div className="hidden sm:flex">
          <label className="input input-bordered input-sm flex items-center gap-2 ">
            <input type="text" className="grow " placeholder="Search" />
            <MagnifyingGlassIcon className="h-6 text-gray-500" />
          </label>
        </div>
      </div>

      <div className="flex items-center">
        <div className="sm:hidden">
          <button className="btn btn-ghost btn-sm">
            <MagnifyingGlassIcon className="h-6 text-white" />
          </button>
        </div>
        <button className="btn btn-outline btn-sm mr-2 text-white border-white">
          Login
        </button>
        <div className="flex items-center justify-center mr-2 md:mr-6">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
