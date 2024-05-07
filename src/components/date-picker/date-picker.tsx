import * as React from "react";
import { format } from "date-fns";
import { ptBR, enUS, es } from "date-fns/locale";
import { CalendarIcon } from "@stash-ui/light-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/button";
import { Calendar } from "@/components/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import { Matcher } from "react-day-picker";

interface DatePickerProps {
  label?: string;
  helpText?: string;
  placeholder?: string;
  locale?: "en" | "pt" | "es";
  onSelect?: (date?: Date) => void;
  disabled?: Matcher | Matcher[];
}

export function DatePicker({ locale = "en", label, placeholder, helpText, onSelect, ...props }: DatePickerProps) {
  const [date, setDate] = React.useState<Date>();

  const handleSelect = (date?: Date) => {
    onSelect?.(date);
    setDate(date);
  };

  const getLocale = () => {
    switch (locale) {
      case "pt":
        return ptBR;
      case "es":
        return es;
      default:
        return enUS;
    }
  };

  return (
    <Popover>
      <div className='flex flex-col items-start gap-1'>
        {label ? (
          <label className='text-xs font-semibold text-tertiary-foreground' htmlFor='date-picker'>
            {label}
          </label>
        ) : null}

        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full max-w-[280px] justify-between text-left font-normal",
              !date && "text-muted-foreground"
            )}
            data-testid="date-picker-button-popover-trigger"
          >
            {date ? (
              format(date, "PPP", { locale: getLocale() })
            ) : (
              <span className='text-tertiary-foreground text-sm'>{placeholder || "Pick a date"}</span>
            )}
            <CalendarIcon height={20} width={20} color='#52525B' />
          </Button>
        </PopoverTrigger>

        {helpText ? <span className='text-xs font-normal text-tertiary-foreground mt-1'>{helpText}</span> : null}
      </div>

      <PopoverContent className='w-auto p-0 bg-background-accent' data-testid="date-picker-popover-content">
        <Calendar mode='single' selected={date} onSelect={handleSelect} initialFocus locale={getLocale()} {...props} />
      </PopoverContent>
    </Popover>
  );
}
