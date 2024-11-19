import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  direction?: "horizontal" | "vertical";
}

interface RadioItemProps extends RadioGroupPrimitive.RadioGroupItemProps {
  children?: React.ReactNode;
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ children, direction = "horizontal", ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn("flex gap-1", { "flex-col": direction === "horizontal" })}
    {...props}
  >
    {children}
  </RadioGroupPrimitive.Root>
));

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioItem = ({
  id,
  value,
  children,
  disabled,
  ...props
}: RadioItemProps) => (
  <div className="flex items-center gap-2 h-8 rounded-lg w-fit transition duration-200 py-1 px-2">
    <RadioGroupPrimitive.Item
      value={value}
      id={id}
      disabled={disabled}
      className="peer border border-gray-500/65 w-4 h-4 rounded-full enabled:hover:ring-8 enabled:hover:ring-gray-500/10 aria-checked:ring-purple-500/10 aria-checked:border-4 enabled:aria-checked:border-purple-500 transition duration-200"
      {...props}
    >
      <RadioGroupPrimitive.Indicator />
    </RadioGroupPrimitive.Item>

    <label
      className={cn(
        "text-gray-600/85 text-sm peer-focus:underline duration-200 transition peer-focus:decoration-gray-500",
        {
          "peer-aria-checked:text-purple-600/85": !disabled,
          "peer-disabled:text-gray-500/45": disabled,
        }
      )}
      htmlFor={id}
    >
      {children}
    </label>
  </div>
);

export { RadioGroup, RadioItem };
