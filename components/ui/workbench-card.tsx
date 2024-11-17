import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Check, X } from "lucide-react";
import { Button } from "./button";

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
        <div className="flex items-center gap-2 mt-5 *:w-full">
          <Button variant={"default"}>
            <Check />
            Accept
          </Button>
          <Button variant={"secondary"}>
            <X />
            Decline
          </Button>
        </div>
      </CardContent>
      <hr />
      <CardFooter>
        <p className="pt-3">{notes}</p>
      </CardFooter>
      {/* <div className="bg-zinc-50 border border-zinc-200 shadow-lg absolute px-3 py-1 w-fit rounded-full text-sm -translate-y-4 translate-x-6">
        {agentId}
      </div> */}
    </Card>
  );
}
