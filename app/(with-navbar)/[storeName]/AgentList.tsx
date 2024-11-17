"use client";
import LiveAgent from "@/components/ui/live-agent";
import { userInfoStore } from "@/store/store";
import { Layers3 } from "lucide-react";
import React, { useEffect } from "react";

export default function AgentList({ storeName }: { storeName: string }) {
  const agentsList = userInfoStore((state) => state.agentsList);
  const setAgentsList = userInfoStore((state) => state.setAgentsList);

  const fetchAgents = async () => {
    const response = await fetch(
      "https://46fnsm73nrerivulj3wuylo43e0ykaha.lambda-url.us-east-2.on.aws/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          store_name: storeName,
        }),
      }
    );

    const agents = await response.json();

    setAgentsList(agents);
  }

  useEffect(() => {
    if (agentsList.length == 0) {
      // make request to lambda function
      fetchAgents();
    }
  }, [agentsList])

  return (
    <div>
      <h2>Live Agents</h2>
      <div>
        {agentsList.length > 0 ? (
          agentsList.map((d, i) => (
            <LiveAgent
              key={i}
              title={d.name}
              description={d.description}
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
