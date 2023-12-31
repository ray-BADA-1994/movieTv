/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import React from "react";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { v4 as uuidv4 } from "uuid";

const SelectDemo = ({ setFilterName }) => {
  const Filterdata = [
    {
      type: "Popular",
      category: "popular",
    },
    {
      type: "On Air",
      category: "On_Air",
    },
    {
      type: "Top Rated",
      category: "Top_Rated",
    },
    {
      type: "Airing Today",
      category: "Airing_Today",
    },
  ];
  const handleClicked = (value) => {
    if (value === "popular") {
      setFilterName("popular");
    } else if (value === "On_Air") {
      setFilterName("onAir");
    } else if (value === "Airing_Today") {
      setFilterName("airingToday");
    } else if (value === "Top_Rated") {
      setFilterName("topRated");
    }
  };
  return (
    <Select.Root onValueChange={(value) => handleClicked(value)}>
      <Select.Trigger
        className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] font-semibold bg-white text-black shadow-[0,2px,10px]y shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px]y focus:shadow-black data-[placeholder]:text-black outline-none"
        aria-label="Food"
      >
        <Select.Value placeholder="Order" />
        <Select.Icon className="text-black">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            <Select.Group>
              <Select.Label className="px-[25px] text-xs leading-[25px] text-white bg-black ">
                Tv Series List
              </Select.Label>
              {Filterdata.map((item) => (
                <SelectItem key={uuidv4()} value={item.category}>
                  {item.type}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={` text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1
          ${className}`}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default SelectDemo;
