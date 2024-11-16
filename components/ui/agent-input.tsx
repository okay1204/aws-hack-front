import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./button";

export default function AgentInput({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center w-fit border broder-zinc-300 shadow-xl rounded-xl p-1 bg-zinc-200/50",
        props.className
      )}
    >
      <input
        type="text"
        placeholder="Type Here..."
        className="py-3 px-5 text-lg font-medium rounded-l-lg bg-zinc-50 z-20"
      />
      <div className="p-2 bg-gradient-to-r from-zinc-50 to-zinc-200/bg-zinc-200/50 rounded-r-lg">
        <Button>Submit</Button>
      </div>
    </div>
  );
}
