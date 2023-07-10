import { useControls } from "../hooks/useControls";

export const Controls = () => {
  const {
    handleUp,
    handleDown,
    handleLeft,
    handleRight,
    handleSet,
    handleDelete,
    handleZoomIn,
    handleZoomOut,
  } = useControls();

  return (
    <>
      <div className="absolute bottom-10 right-10">
        <div className="flex flex-row">
          <div className="flex flex-col items-center justify-center select-none px-2 bg-[#ffffff] mx-10 rounded-lg">
            <img
              src="./assets/+.png"
              className="cursor-pointer mb-1"
              onClick={handleZoomIn}
            />

            <img
              src="./assets/-.png"
              className="cursor-pointer mt-1"
              onClick={handleZoomOut}
            />
          </div>
          <div className="flex flex-col items-center justify-center select-none px-2 bg-[#ffffff] rounded-lg">
            <div className="-mb-1">
              <img
                src="./assets/Flecha.png"
                className="cursor-pointer"
                onClick={handleUp}
              />
            </div>
            <div className="flex flex-row">
              <img
                src="./assets/Flecha.png"
                className="cursor-pointer -rotate-90 mr-2"
                onClick={handleLeft}
              />
              <img
                src="./assets/Flecha.png"
                className="cursor-pointer rotate-90 ml-2"
                onClick={handleRight}
              />
            </div>
            <div className="-mt-1">
              <img
                src="./assets/Flecha.png"
                className="cursor-pointer rotate-180"
                onClick={handleDown}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[10vh] right-10">
        <div className="flex flex-row mt-5">
          <button
            type="button"
            className="text-gray-500 bg-white border border-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-24"
            onClick={handleSet}
          >
            Fijar
          </button>
          <button
            type="button"
            className="text-gray-500 bg-white border border-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-24"
            onClick={handleDelete}
          >
            Borrar
          </button>
        </div>
      </div>
    </>
  );
};
