import { useState, useEffect } from "react";
import { Asset, Category } from "../api/api";
import { SideBarOption } from "./SideBarOption";

interface Props {
  selected: SideBarOption;
  terminaciones: Asset;
  aberturas: Asset;
  equipamiento: Asset;
}

export const ItemsContainer = ({
  selected,
  terminaciones,
  aberturas,
  equipamiento,
}: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>();

  const getItems = () => {
    switch (selected) {
      case "Aberturas":
        return aberturas;
      case "Equipamiento":
        return equipamiento;
      default:
        return terminaciones;
    }
  };

  const currentItems = getItems();
  const handleSelect = (item: Category) => {
    setSelectedCategory(item);
  };

  const clearSelected = () => {
    setSelectedCategory(undefined);
  };

  useEffect(() => {
    clearSelected();
  }, [selected]);

  if (!selectedCategory) {
    return (
      <div>
        <p className="text-lg color font-bold  text-gray-500 ml-5 my-5">
          {selected}
        </p>
        {currentItems.map((item) => {
          return (
            <div
              key={item.name}
              className="px-5"
              onClick={() => {
                handleSelect(item);
              }}
            >
              <button
                type="button"
                className="text-gray-500 bg-white border border-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-80 justify-between flex"
              >
                <p>{item.name}</p>
                <img
                  src={"./assets/activo.png"}
                  className="rotate-180 object-contain h-5"
                />
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <div
        className="text-sm ml-5 mt-5 text-gray-500 flex items-center cursor-pointer"
        onClick={clearSelected}
      >
        <img src={"./assets/activo.png"} className="object-contain h-3 mr-2" />
        {selected}
      </div>
      <p className="text-lg font-bold  text-gray-500 ml-5 mt-5  mb-10">
        {selectedCategory.name}
      </p>
      <div className="grid grid-cols-3 gap-4 px-5">
        {selectedCategory.items.map((item) => {
          return (
            <div
              key={item.name}
              className="w-28 mx-5 h-28 flex items-center justify-center flex-col"
            >
              <img src={item.img} className="object-contain h-28" />
              <p className="text-sm text-gray-500 mt-4 font-semibold">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
