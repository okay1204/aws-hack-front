"use client";
import LiveAgent from "@/components/ui/live-agent";
import { userInfoStore } from "@/store/store";
import React, { useEffect, useState } from "react";

export default function AgentList({ storeName }: { storeName: string }) {
  const [data, setData] = useState([]);
  const agentsList = userInfoStore((state) => state.agentsList);
  // const getD = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://46fnsm73nrerivulj3wuylo43e0ykaha.lambda-url.us-east-2.on.aws/",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           store_name: storeName,
  //         }),
  //       }
  //     );

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("Lambda response:", data);
  //       setData(data);
  //     } else {
  //       console.error("Lambda call failed:", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Error calling lambda function:", error);
  //   }
  // };

  // useEffect(() => {
  //   getD();
  // }, [storeName]);

  return (
    <div>
      <h2>Live Agents</h2>
      <div>
        {agentsList && agentsList.map((d, i) => (
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
