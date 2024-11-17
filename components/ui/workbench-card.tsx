import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { IdCard } from "lucide-react";

export default function WorkbenchCard({
  name,
  notes,
  cost,
  volume,
  schedule,
  agentId,
}: {
  name: string;
  notes: string;
  cost: number;
  volume: number;
  schedule: string;
  agentId: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="mt-2">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="pt-3 grid grid-cols-2">
          <p>Cost: {cost}</p>
          <p>Volume: {volume}</p>
          <p className="col-span-2">Schedule: {schedule}</p>
        </div>
        <div className="bg-zinc-100 border border-zinc-200 px-3 py-1 w-fit rounded-full text-sm mt-4">
          {agentId}
        </div>
        {/* <div className="flex items-center gap-2 *:w-full">
          <Button variant={"default"}>Test</Button>
          <Button variant={"secondary"}>Test</Button>
        </div> */}
      </CardContent>
      <hr />
      <CardFooter>
        <p className="pt-3">{notes}</p>
      </CardFooter>
    </Card>
  );
}
