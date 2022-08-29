import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import ChevronUpIcon from "@/components/icons/ChevronUpIcon";

interface Item {
  id: string | number;
  name: string;
}

interface Props {
  items: Item[];
  selected: Item;
  onChange: (id: number | string) => void;
  className?: string;
}

const ISelect = ({ selected, onChange, items, className }: Props) => {
  const [selectedOption, setSelectedOption] = useState(selected);
  const [query, setQuery] = useState("");

  const filteredItems =
    query === ""
      ? items
      : items.filter((item: any) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleChange = (value: any) => {
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <Combobox value={selectedOption} onChange={handleChange}>
      <div className={`relative mt-1 h-12 max-w-full w-full ${className}`}>
        <Combobox.Input
          className="w-full h-full border rounded-md flex items-center text-right outline-none px-4  hover:border-neutral-300  hover:bg-neutral-50 text-lg placeholder:text-sm focus:border-2 focus:border-primary focus:border-primary-200"
          displayValue={(item: any) => item.name}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Button className="absolute inset-y-0 left-2 flex items-center pr-2">
          {({ open }) => (open ? <ChevronUpIcon /> : <ChevronDownIcon />)}
        </Combobox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 z-10 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredItems.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                موردی یافت نشد
              </div>
            ) : (
              filteredItems.map((item: Item) => (
                <Combobox.Option
                  key={item.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-sky-50" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white bg-sky-50" : "text-teal-600"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default ISelect;
