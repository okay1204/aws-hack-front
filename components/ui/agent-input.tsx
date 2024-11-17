"use client";
import { cn } from "@/lib/utils";
import React, { useActionState, useEffect } from "react";
import { Button } from "./button";
import { useFormState } from "react-dom";
import SubmitButton from "./submit-button";

export default function AgentInput({
  storeName,
  ...props
}: { storeName: string } & React.HTMLAttributes<HTMLDivElement>) {
  const create = async (
    prev: {
      result: null | "success" | "failed";
    },
    formData: FormData
  ): Promise<{ result: null | "success" | "failed" }> => {
    const response = await fetch(
      "https://n5cvvnkslw6jsh6fnhaqm25fwu0zosut.lambda-url.us-east-2.on.aws/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          store_name: storeName,
          agent_name: String(formData.get("agentName")),
          deal_extra_info: String(formData.get("agentDescription")),
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("Agent created successfully", data);
      return {
        result: "success",
      };
    } else {
      console.error("Failed to create agent:", response.statusText);
      return {
        result: "failed",
      };
    }
  };

  const [state, formAction] = useFormState<
    {
      result: null | "success" | "failed";
    },
    FormData
  >(create, { result: null });

  useEffect(() => {
    if (state.result === "success") console.log("Agent created successfully");
    if (state.result === "failed") console.error("Failed to create agent");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <form
      className={cn(
        "grid w-96 border border-zinc-300/70 shadow-xl rounded-xl p-1 bg-zinc-200/50 gap-0.5",
        props.className
      )}
      action={formAction}
    >
      <input
        type="text"
        placeholder="Agent Name"
        name="agentName"
        className="py-3 px-4 text-sm font-medium rounded-t-lg bg-zinc-50 z-20 outline-none rounded-b-md"
        required
      />
      <textarea
        placeholder="This agent specializes in..."
        name="agentDescription"
        className="py-3 px-4 text-sm font-medium rounded-b-lg bg-zinc-50 z-20 resize-none outline-none rounded-t-md"
        required
      />

      <div className="p-2 rounded-r-lg flex justify-end">
        <SubmitButton />
      </div>
    </form>
  );
}
