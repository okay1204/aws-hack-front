"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import WorkbenchCard from "@/components/ui/workbench-card";
import { userInfoStore } from "@/store/store";
import React, { useEffect, useState } from "react";

export default function WorkBench({ storeName }: { storeName: string }) {
  const workBenchCompanies = userInfoStore((state) => state.workBenchCompanies);
  // const getD = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://fp4htdl24ozhxirnmwfbrdgf2e0iahno.lambda-url.us-east-2.on.aws/",
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
      <div className="flex items-center justify-between gap-6">
        <h2>Workbench</h2>
        <div className="w-fit mt-6">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder={String("Sort")} />
            </SelectTrigger>
            <SelectContent align="end">
              {["Test", "Test2", "Test3"].map((type, i) => (
                <SelectItem key={i} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {workBenchCompanies.map(({ company_name, notes }, i) => (
          <WorkbenchCard key={i} name={company_name} notes={notes} />
        ))}
      </div>
    </div>
  );
}
