import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  function handleOptionClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    option: string,
  ) {
    event.preventDefault();
    setSelectedOption(option);
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-white px-3 py-2 text-sm shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-gray-500 ">
          {selectedOption || "Guardar y salir"}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <a
                href="#"
                onClick={(event) => handleOptionClick(event, "Guardar y salir")}
                className={classNames(
                  selectedOption === "Guardar y salir"
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-500",
                  "block px-4 py-2 text-sm",
                )}
              >
                Guardar y salir
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                onClick={(event) =>
                  handleOptionClick(event, "Salir sin guardar")
                }
                className={classNames(
                  selectedOption === "Salir sin guardar"
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-500",
                  "block px-4 py-2 text-sm",
                )}
              >
                Salir sin guardar
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                onClick={(event) =>
                  handleOptionClick(event, "Guardar y continuar")
                }
                className={classNames(
                  selectedOption === "Guardar y continuar"
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-500",
                  "block px-4 py-2 text-sm",
                )}
              >
                Guardar y continuar
              </a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
