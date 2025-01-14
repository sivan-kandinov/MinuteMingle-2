import React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";

export default function ScrollAreaItem({ classes }: { classes: string[] }) {
  return (
    <ScrollArea.Root className="w-[200px] h-[225px] rounded overflow-hidden shadow-[0_2px_10px] shadow-lg shadow-black bg-gray-100">
      <ScrollArea.Viewport className="w-full h-full rounded">
        <div className="py-[15px] px-5">
          <div className="text-black text-[15px] leading-[18px] font-medium">
            Classes
          </div>
          {classes.map((c) => (
            <div
              className="text-black text-[13px] leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6"
              key={c}
            >
              {c}
            </div>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="bg-blackA5" />
    </ScrollArea.Root>
  );
}
