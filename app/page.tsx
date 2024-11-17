"use client";
import { Input } from "@/components/ui/input";
import Logo from "@/components/ui/logo";
import SubmitButton from "@/components/ui/submit-button";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { userInfoStore } from "@/store/store";
import { AnimatePresence, delay } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { motion } from "framer-motion";

const Home = () => {
  const setRestaurantName = userInfoStore((state) => state.setRestaurantName);
  const setAgentsList = userInfoStore((state) => state.setAgentsList);
  const setWorkBenchCompaneis = userInfoStore(
    (state) => state.setWorkBenchCompanies
  );

  const router = useRouter();

  const handleFetchRedirect = async (
    prev: {
      result: null | "success" | "failed";
    },
    formData: FormData
  ): Promise<{ result: null | "success" | "failed" }> => {
    const restaurantName = String(formData.get("restaurantName"));
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

      setRestaurantName(restaurantName);

      const agentsList = await response.json();
      const workBenchData = await response2.json();

      console.log("passed");
      console.log(restaurantName);

      // store in zustand
      setAgentsList(agentsList);
      setWorkBenchCompaneis(workBenchData);

      if (agentsList.length > 0) {
        router.push("/" + restaurantName);
        return {
          result: "success",
        };
      } else {
        router.push("/settings");
        return {
          result: "success",
        };
      }
    } catch (error) {
      console.error(error);
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
  >(handleFetchRedirect, { result: null });

  useEffect(() => {
    if (state.result === "success") console.log("Agent created successfully");
    if (state.result === "failed") console.error("Failed to create agent");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const blurIn = {
    hidden: { opacity: 0, y: -10, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <section className="px-6 bg-gradient-to-tr from-zinc-50 to-zinc-100">
      <div className="mx-auto max-w-[1000px] flex justify-center flex-col h-screen gap-6">
        <AnimatePresence>
          <motion.div
            variants={blurIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
          >
            <Logo />
          </motion.div>
          <motion.h1
            className="mt-0"
            variants={blurIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15, duration: 0.5, ease: "easeInOut" }}
          >
            <span className="text-zinc-500 font-medium">Welcome to </span>
            <TextShimmer duration={1.2}>Nezerac</TextShimmer>.
          </motion.h1>
          <motion.p
            className="text-zinc-500"
            variants={blurIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          >
            Please input your company name.
            <br />
            If you have not registered for Nezerac, please click{" "}
            <Link href={"/settings"}>here</Link>
          </motion.p>
          <motion.form
            className="flex gap-2 w-96"
            action={formAction}
            variants={blurIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45, duration: 0.5, ease: "easeInOut" }}
          >
            <Input name="restaurantName" placeholder="Restaurant name" />
            <SubmitButton
              initialIcon={<ArrowRight />}
              initial="Submit"
              loading="Loading"
            />
          </motion.form>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Home;
