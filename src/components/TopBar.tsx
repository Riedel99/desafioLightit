import { Dropdown } from "./Dropdown";

export const TopBar = () => {
  return (
    <div className="bg-[#333333] min-h-[10%] grid">
      <div className="flex justify-between items-center h-full px-32 align-middle">
        <div className="text-white">
          <img
            src="https://lightit.io/images/Logo.svg"
            alt="Logo"
            className="py-2"
          />
        </div>
        <div className="flex items-center">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};
