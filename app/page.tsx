"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userInfoStore } from "@/store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const restaurantName = userInfoStore((state) => state.restaurantName);
  const setRestaurantName = userInfoStore((state) => state.setRestaurantName);
  const setAgentsList = userInfoStore((state) => state.setAgentsList);
  const setWorkBenchCompaneis = userInfoStore(
    (state) => state.setWorkBenchCompanies
  );

  const router = useRouter();

  async function handleClick() {
    try {
      const response = await fetch(
        "https://46fnsm73nrerivulj3wuylo43e0ykaha.lambda-url.us-east-2.on.aws/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            store_name: restaurantName,
          }),
        }
      );

      const response2 = await fetch(
        "https://fp4htdl24ozhxirnmwfbrdgf2e0iahno.lambda-url.us-east-2.on.aws/",
        {
          method: "POST",
          body: JSON.stringify({
            store_name: restaurantName,
          }),
        }
      );

      const agentsList = await response.json();
      const workBenchData = await response2.json();

      // store in zustand
      setAgentsList(agentsList);
      setWorkBenchCompaneis(workBenchData);

      if (agentsList.length > 0) {
        router.push("/" + restaurantName);
      } else {
        router.push("/settings");
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <section className="px-6">
      <div className="mx-auto max-w-[1000px] flex justify-center flex-col h-screen gap-6">
        <h1>
          Welcome to{" "}
          <span className="text-zinc-500 font-serif italic">Nezerac</span>.
        </h1>
        <p className="text-zinc-500">
          Please input your company name.
          <br />
          If you have not registered for Nezerac, please click{" "}
          <Link href={"/settings"}>here</Link>
        </p>
        <form className="flex gap-2 w-96">
          <Input
            placeholder="company name"
            onChange={(e) => setRestaurantName(e.target.value)}
            value={restaurantName}
          />
          <Button onClick={handleClick}>Submit</Button>
        </form>
      </div>
    </section>
  );
};

export default Home;
