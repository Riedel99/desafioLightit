import { useContext } from "react";
import { AssetsContext } from "../contexts/assetsContext";
import { CloseFlap } from "./CloseFlap";
import { SideBarOption } from "./SideBarOption";
import { ItemsContainer } from "./ItemsContainer";

interface Props {
  selected: SideBarOption | undefined;
  handleClose: () => void;
}

export const ExpandedSideBar = ({ selected, handleClose }: Props) => {
  const { terminaciones, aberturas, equipamiento } = useContext(AssetsContext);

  if (!selected || !terminaciones || !aberturas || !equipamiento) {
    return null;
  }

  return (
    <div className="bg-[#f7f7f7] h-90vh w-fit flex relative">
      <ItemsContainer
        selected={selected}
        terminaciones={terminaciones}
        aberturas={aberturas}
        equipamiento={equipamiento}
      />
      <CloseFlap handleClose={handleClose} />
    </div>
  );
};
