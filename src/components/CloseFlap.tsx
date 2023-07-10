interface Props {
  handleClose: () => void;
}

export const CloseFlap = ({ handleClose }: Props) => {
  return (
    <div
      className="bg-[#f7f7f7] h-20 w-8 absolute -right-8 top-1/2 items-center justify-center flex cursor-pointer"
      style={{
        borderTopRightRadius: "25%",
        borderBottomRightRadius: "25%",
      }}
      onClick={handleClose}
    >
      <img src="./assets/activo.png" alt="Logo" className="py-2" />
    </div>
  );
};
