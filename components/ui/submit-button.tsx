import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./button";
import { Loader, Save } from "lucide-react";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      {pending ? <Loader className="animate-spin" /> : <Save />}
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}
