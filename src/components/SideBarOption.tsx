export type SideBarOption = "Aberturas" | "Equipamiento" | "Terminaciones";

interface Props {
  name: SideBarOption;
  handleSelect: (option: SideBarOption) => void;
}

export const SideBarOption = ({ name, handleSelect }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    handleSelect(name);
  };

  return (
    <div
      className="py-2 cursor-pointer items-center justify-center w-full flex flex-col"
      onClick={handleClick}
    >
      <img src={`./assets/${name}.png`} alt="Logo" className="mx-auto py-1" />
      <p className="text-center text-gray-500 text-sm">{name}</p>
    </div>
  );
};
