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
import React from "react";

export default function WorkBench() {
  const workBenchCompanies = userInfoStore((state) => state.workBenchCompanies);
  console.log(workBenchCompanies);

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
        {workBenchCompanies.map(
          ({ company_name, cost, volume, notes, schedule, agent_id }, i) => (
            <WorkbenchCard
              key={i}
              name={company_name}
              cost={cost}
              volume={volume}
              notes={notes}
              schedule={schedule}
              agentId={agent_id}
            />
          )
        )}
      </div>
    </div>
  );
}
