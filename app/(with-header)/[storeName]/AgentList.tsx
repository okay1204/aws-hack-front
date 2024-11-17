"use client";
import LiveAgent from "@/components/ui/live-agent";
import { userInfoStore } from "@/store/store";
import { Layers3 } from "lucide-react";
import React from "react";

export default function AgentList() {
  const agentsList = userInfoStore((state) => state.agentsList);

  return (
    <div>
      <h2>Live Agents</h2>
      <div>
        {agentsList.length > 0 ? (
          agentsList.map((d, i) => (
            <LiveAgent
              key={i}
              title={d}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          ))
        ) : (
          <div className="bg-zinc-50 border border-zinc-200 shadow-sm px-6 py-20 rounded-2xl flex items-center justify-center flex-col gap-2">
            <Layers3 />
            <p>No agents found</p>
          </div>
        )}
      </div>
    </div>
  );
}
