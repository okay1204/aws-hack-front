import { cva, VariantProps } from "class-variance-authority";
import { toast } from "sonner";

const toastVariant = cva(
  ["p-6 py-3 w-[300px] shadow-lg text-white rounded-lg border "],
  {
    variants: {
      variant: {
        success: "border-green-600 bg-green-500",
        error: "border-red-600 bg-red-500",
        warning: "border-yellow-600 bg-yellow-500",
        info: "border-blue-600 bg-blue-500",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

export const notify = (
  variant: VariantProps<typeof toastVariant>["variant"],
  message: string
) =>
  toast.custom(() => (
    <div className={toastVariant({ variant })}>
      <div>{message}</div>
    </div>
  ));
