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
import { Boxes } from "lucide-react";
import React, { useEffect } from "react";

export default function WorkBench({ storeName }) {
  const workBenchCompanies = userInfoStore((state) => state.workBenchCompanies);
  const setWorkBenchCompanies = userInfoStore((state) => state.setWorkBenchCompanies);
  console.log(workBenchCompanies);

  const fetchData = async () => {
    const response = await fetch(
      "https://fp4htdl24ozhxirnmwfbrdgf2e0iahno.lambda-url.us-east-2.on.aws/",
      {
        method: "POST",
        body: JSON.stringify({
          store_name: storeName,
        }),
      }
    );

    const workBenchCompaniesData = await response.json();
    setWorkBenchCompanies(workBenchCompaniesData);
  }

  useEffect(() => {
    if (workBenchCompanies.length == 0) {
      fetchData();
    }
  }, [workBenchCompanies])

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
        {workBenchCompanies.length > 0 ? (
          workBenchCompanies.map(
            ({ company_name, cost, volume, notes, schedule }, i) => (
              <WorkbenchCard
                key={i}
                name={company_name}
                cost={cost}
                volume={volume}
                notes={notes}
                schedule={schedule}
              />
            )
          )
        ) : (
          <div className="bg-zinc-50 border border-zinc-200 shadow-sm px-6 py-20 rounded-2xl flex items-center justify-center flex-col gap-2 md:col-span-2 lg:col-span-3">
            <Boxes />
            <p>No workbench found</p>
          </div>
        )}
      </div>
    </div>
  );
}
