import { cn } from "@/lib/utils";
import React from "react";

export default function LiveAgent({
  title,
  description,
  ...props
}: {
  title: string;
  description: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border-x border-t last:border-b px-6 py-4  first:border-zinc-200 first:rounded-t-2xl last:rounded-b-2xl bg-zinc-50 shadow-sm grid gap-1",
        props.className
      )}
      {...props}
    >
      <div className="flex items-center gap-2.5">
        <span className="relative flex size-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full size-2.5 bg-green-500" />
        </span>
        <h5 className="text-base font-medium">{title}</h5>
      </div>
      <p className="text-sm text-zinc-500">{description}</p>
    </div>
  );
}
