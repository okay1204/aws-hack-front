"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./button";

export default function AgentInput({
  storeName,
  ...props
}: { storeName: string } & React.HTMLAttributes<HTMLDivElement>) {
  const create = async (input: string, description: string) => {
    const response = await fetch(
      "https://n5cvvnkslw6jsh6fnhaqm25fwu0zosut.lambda-url.us-east-2.on.aws/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          store_name: storeName,
          agent_name: input,
          deal_extra_info: description,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("Agent created successfully", data);
    } else {
      console.error("Failed to create agent:", response.statusText);
    }
  };

  const [agent, setAgent] = React.useState({
    name: "",
    description: "",
  });

  return (
    <form
      className={cn(
        "grid w-96 border border-zinc-300/70 shadow-xl rounded-xl p-1 bg-zinc-200/50",
        props.className
      )}
      onSubmit={(e) => {
        e.preventDefault();
        create(agent.name, agent.description);
        setAgent({ name: "", description: "" });
      }}
    >
      <input
        type="text"
        placeholder="Agent Name"
        value={agent.name}
        onChange={(e) => setAgent({ ...agent, name: e.target.value })}
        className="py-3 px-4 text-lg font-medium rounded-t-lg bg-zinc-50 z-20 outline-none"
        required
      />
      <textarea
        placeholder="This agent specializes in..."
        value={agent.description}
        onChange={(e) => setAgent({ ...agent, description: e.target.value })}
        className="py-3 px-4 text-base font-medium rounded-b-lg bg-zinc-50 z-20 resize-none outline-none"
        required
      />

      <div className="p-2 rounded-r-lg flex justify-end">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
