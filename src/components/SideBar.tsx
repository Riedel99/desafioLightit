import { useState } from "react";
import { SideBarOption } from "./SideBarOption";
import { ExpandedSideBar } from "./ExpandedSideBar";

export const SideBar = () => {
  const [selected, setSelected] = useState<SideBarOption>();

  const handleSelect = (option: SideBarOption) => {
    setSelected(option);
  };

  const handleClose = () => {
    setSelected(undefined);
  };

  return (
    <>
      <div className="min-h-[90%] bg-[#ffffff] w-fit flex">
        <div className="items-center justify-center">
          <div className="flex flex-col items-center justify-center h-full select-none px-2">
            <SideBarOption name="Aberturas" handleSelect={handleSelect} />
            <SideBarOption name="Equipamiento" handleSelect={handleSelect} />
            <SideBarOption name="Terminaciones" handleSelect={handleSelect} />
          </div>
        </div>

        <ExpandedSideBar handleClose={handleClose} selected={selected} />
      </div>
    </>
  );
};
