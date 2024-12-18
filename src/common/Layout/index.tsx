import { useCommonStore } from "../../stores";
import { HeaderBar } from "./HeaderBar";
import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { openMenu } = useCommonStore();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 shadow-md w-full sm:z-50">
        <HeaderBar />
      </div>
      {/* <div className="sm:ml-64"> */}
      {/* <div
          className={`p-4 pt-[60px] rounded-md m-4 bg-whitePearl sm:ml-64 sm:mx-6`}
        >
          {children}
        </div> */}
      {/* </div> */}

      <Navbar />
      <div className={`pt-[70px] sm:ml-64 p-6 ${openMenu ? 'overflow-hidden' : 'overflow-auto'}`}>
        <div className="bg-white rounded-md shadow-md p-4">{children}</div>
      </div>
    </div>
  );
};
