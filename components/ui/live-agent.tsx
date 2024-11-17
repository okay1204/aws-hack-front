import React from "react";

export default function LiveAgent() {
  return (
    <div className="border-x border-t last:border-b px-6 py-4  first:border-zinc-200 first:rounded-t-2xl last:rounded-b-2xl bg-zinc-50 shadow-sm grid gap-1">
      <div className="flex items-center gap-2.5">
        <span className="relative flex size-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full size-2.5 bg-green-500" />
        </span>
        <h5 className="text-base font-medium">Live Agent</h5>
      </div>
      <p className="text-sm text-zinc-500">
        A live agent is available to help you with your queries.
      </p>
    </div>
  );
}
