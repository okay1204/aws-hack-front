"use client";
import LiveAgent from "@/components/ui/live-agent";
import { userInfoStore } from "@/store/store";
import React from "react";

export default function AgentList() {
  const agentsList = userInfoStore((state) => state.agentsList);

  return (
    <div>
      <h2>Live Agents</h2>
      <div>
        {agentsList &&
          agentsList.map((d, i) => (
            <LiveAgent
              key={i}
              title={d}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          ))}
      </div>
    </div>
  );
}
