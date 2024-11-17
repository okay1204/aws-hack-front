import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./button";
import { Loader, Save } from "lucide-react";

export default function SubmitButton({
  initialIcon = <Save />,
  initial = "Save",
  loading = "Saving...",
}: {
  initialIcon?: React.ReactNode;
  initial?: string;
  loading?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      {pending ? <Loader className="animate-spin" /> : initialIcon}
      {pending ? loading : initial}
    </Button>
  );
}
