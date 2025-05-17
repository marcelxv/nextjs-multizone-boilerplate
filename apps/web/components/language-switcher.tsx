"use client";

import { useState, useTransition } from "react";
import { Check, ChevronsUpDown, Globe } from "lucide-react";

import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components";
import { cn } from "@workspace/ui/lib/utils";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { Locale } from "next-intl";

const languages = [
  { value: "en", label: "English" },

  { value: "de", label: "Deutsch" },
  { value: "mr", label: "मराठी" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(params.locale ?? "en");

  function onSelectChange(currentValue: string) {
    const nextLocale = currentValue as Locale;
    setValue(currentValue === value ? "" : currentValue);
    setOpen(false);

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-10 p-0 md:w-[140px] md:justify-between md:px-3"
        >
          <Globe className="h-4 w-4 md:mr-2" />
          <span className="hidden md:inline-flex">
            {languages.find((language) => language.value === value)?.label}
          </span>
          <ChevronsUpDown className="hidden h-4 w-4 shrink-0 opacity-50 md:inline-flex" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  value={language.value}
                  onSelect={onSelectChange}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === language.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {language.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
