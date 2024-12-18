import { XMarkIcon } from "@heroicons/react/24/outline";
import { Const } from "../../constants";
import { Menus } from "../../constants/menu";
import { useCommonStore } from "../../stores";

type Props = {
  // open: boolean;
  // onClose: () => void;
};

// export const Navbar = ({ open, onClose }: Props) => {
export const Navbar = ({}: Props) => {
  const { openMenu, updateOpenMenu } = useCommonStore();
  const theme = localStorage.getItem("theme") ?? "mytheme";
  console.log("theme", theme); // TODO fix theme state update slow 1 step

  const xsStyle = `absolute top-0 left-0 w-4/5 h-[calc(100vh-2px)] bg-white  shadow-lg transition-all z-100 ${
    openMenu ? "block" : "hidden"
  }`;
  const sxStyle = `sm:flex sm:top-[60px] sm:w-64 sm:bg-base-100 sm:h-[calc(100vh-60px)] sm:left-1 sm:text-white sm:shadow-none sm:transition-none sm:rounded-sm`;
  
  const hanldeClose = () => {
    updateOpenMenu(!openMenu)
  }

  return (
    <div className={`${xsStyle} ${sxStyle}`} >
      <div className="flex w-full flex-col sm:rounded-md">
        <div className="flex justify-between items-center p-3 sm:hidden">
          <p className="text-black text-lg font-bold">{Const.nameProject}</p>
          <button
            className="text-black"
            onClick={hanldeClose}
          >
            <XMarkIcon className="h-5" />
          </button>
        </div>
        <div className="divider mt-[-5px] sm:hidden"></div>

        {/* Backdrop */}
        <div
          className={`backdrop ${openMenu ? "active" : ""}`}
          onClick={hanldeClose}
        ></div>
        {/* Menus */}
        <div className="overflow-y-auto h-[90vh] sm:h-full sm:max-h-full">
          <ul>
            {Menus.map((menu, index) => (
              <li key={index} className="pl-4 py-2 hover:bg-gray-100 flex">
                {/* TODO change to router dom */}
                <menu.icon
                  className={`h-5 mr-3`}
                  style={{ color: menu.iconColor ?? "black" }}
                />
                <a
                  href={menu.route}
                  className={`flex items-center gap-2 ${theme === "dark" ? "text-white" : "text-black"}`}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
