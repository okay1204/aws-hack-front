import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Button } from "./button";

export default function WorkbenchCard({
  name,
  notes,
  ...props
}: {
  name: string;
  notes: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="pt-3 pb-6">
          <p>{notes}</p>
        </div>
        <div className="flex items-center gap-2 *:w-full">
          <Button variant={"default"}>Test</Button>
          <Button variant={"secondary"}>Test</Button>
        </div>
      </CardContent>
    </Card>
  );
}
