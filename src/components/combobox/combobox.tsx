"use client";

import * as React from "react";
import { CheckIcon, CaretDownIcon } from "@stash-ui/regular-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";

interface Item {
  value: string;
  label: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  description?: string;
}

interface ComboboxProps {
  items: Item[];
  shouldFilter?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  emptySearchPlaceholder?: string;
  variant?: "default" | "detailed" | "icon-compact" | "image-detailed";
  defaultValue?: string;
  searchValue?: string;
  onSelect?: (value: string) => void;
  onChangeSearchValue?: (value: string) => void;
}

export function Combobox({
  items,
  shouldFilter = true,
  variant = "default",
  placeholder = "Select an item...",
  searchPlaceholder = "Search...",
  emptySearchPlaceholder = "Nothing found.",
  defaultValue,
  searchValue,
  onChangeSearchValue,
  onSelect,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    setValue(defaultValue || "");
  }, [defaultValue]);

  const DefaultVariant = ({ item, selected }: { item: Item; selected: boolean }) => (
    <div className={cn("flex items-center w-full", selected && "justify-between")}>
      {item.label}
      {selected && <CheckIcon />}
    </div>
  );

  const DetailedVariant = ({ item, selected }: { item: Item; selected: boolean }) => (
    <div className={cn("flex items-center w-full", selected && "justify-between")}>
      <div className='flex flex-col'>
        <div className='text-sm font-medium'>{item.label}</div>
        <div className='text-xs text-gray-500'>{item.description}</div>
      </div>

      {selected && <CheckIcon />}
    </div>
  );

  const IconCompactVariant = ({
    item,
    selected,
    border = true,
  }: {
    item: Item;
    selected: boolean;
    border?: boolean;
  }) => (
    <div
      className={cn(
        "w-full flex items-center",
        selected && "justify-between",
        border && "border-[1px] border-border-card p-2 rounded-lg"
      )}
    >
      <div className='flex items-center gap-2'>
        <div className='flex items-center justify-center w-6 h-6 rounded-md'>{item.icon || null}</div>
        <div className='text-sm font-medium'>{item.label}</div>
      </div>

      {selected && <CheckIcon />}
    </div>
  );

  const ImageDetailedVariant = ({ item, selected }: { item: Item; selected: boolean }) => (
    <div className={cn("flex items-center w-full", selected && "justify-between")}>
      <div className='flex items-center gap-4'>
        {item.imageUrl ? (
          <img src={item.imageUrl} alt={item.label} className='w-[64px] h-[48px] rounded-md object-cover' />
        ) : (
          <div className='w-[64px] h-[48px] rounded-md bg-gray-200' />
        )}
        <div>
          <div className='text-sm'>{item.label}</div>
          <div className='text-xs text-gray-500'>{item.description}</div>
        </div>
      </div>

      {selected && <CheckIcon />}
    </div>
  );

  const getVariant = () => {
    switch (variant) {
      case "detailed":
        return DetailedVariant;
      case "icon-compact":
        return IconCompactVariant;
      case "image-detailed":
        return ImageDetailedVariant;
      default:
        return DefaultVariant;
    }
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeSearchValue?.(e.target.value);
  };

  const renderButtonContent = () => {
    if (value) {
      const selectedItem = items.find((item) => item.value === value);

      if (selectedItem && variant === "image-detailed") {
        return React.createElement(getVariant(), {
          item: selectedItem,
          selected: false,
        });
      }

      if (selectedItem && variant === "icon-compact") {
        return React.createElement(getVariant(), {
          item: selectedItem,
          selected: false,
          border: false,
        });
      }

      return selectedItem?.label;
    }

    return placeholder;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          size='combobox'
          role='combobox'
          aria-expanded={open}
          className='w-[500px] justify-between'
        >
          {renderButtonContent()}
          <CaretDownIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[500px] p-0 bg-background-accent' data-testid="comboxbox-popover-content">
        <Command shouldFilter={shouldFilter}>
          <div className='w-full p-4 flex items-center justify-center border-b border-divider'>
            <CommandInput
              placeholder={searchPlaceholder}
              className='h-9 w-full'
              defaultValue={searchValue}
              onInput={handleSearchInput}
            />
          </div>

          <CommandEmpty>{emptySearchPlaceholder}</CommandEmpty>

          <CommandGroup className='max-h-[272px] overflow-y-scroll'>
            {items.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                className={cn(variant === "icon-compact" && "py-1")}
                onSelect={(currentValue: string) => {
                  onSelect?.(currentValue);
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {React.createElement(getVariant(), {
                  item,
                  selected: value === item.value,
                })}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
