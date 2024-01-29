import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button"
const Navbar = () => {
  return (
    <div className="bg-[#474F7A] rounded-b-xl p-4 text-white shadow-2xl mx-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img alt="Logo" src="/path/to/your/logo.png" className="h-8 mr-2" />
          <span className="text-lg font-semibold">Employee Panel</span>
        </div>

        <div>
        <Popover>
      <PopoverTrigger asChild>
        <Button > = </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
          </div>
          <div className="grid gap-2">
          <Button className="w-1/2 p-5 bg-[#474F7A] text-white border-none rounded-xl cursor-pointer transition duration-500 ease-in-out hover:bg-indigo-900">Logout</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>


          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
