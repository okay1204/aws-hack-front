"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect } from "react";

export default function WorkBench() {
  return (
    <>
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
        {/* {dd.map(({ name, notes }, i) => (
          <WorkbenchCard key={i} name={name} notes={notes} />
        ))} */}
      </div>
    </>
  );
}
