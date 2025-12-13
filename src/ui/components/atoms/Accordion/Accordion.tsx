"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@utils";
import { cva, VariantProps } from "class-variance-authority";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className="w-full h-fit"
      suppressHydrationWarning
      {...props}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("w-full h-fit", className)}
      {...props}
    />
  );
}

const triggerVariants = cva(
  "disabled:pointer-events-none disabled:opacity-50 [&[data-state=closed]>svg]:rotate-180 transition-all ease-in-out duration-300 outline-none!",
  {
    variants: {
      variant: {
        default: "flex justify-between items-center w-full h-full",
        section_view: cn(
          "flex justify-between items-center gap-x-[16px] w-full h-full cursor-pointer border border-main-border rounded-[4px] bg-main-border pr-[16px]",
          "transition-all ease-in-out duration-300"
        ),
      },
    },
  }
);

interface AccordionTriggerProps {
  variant: VariantProps<typeof triggerVariants>["variant"];
  className?: string;
  children?: React.ReactNode;
}

function AccordionTrigger({
  className,
  children,
  variant,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> &
  AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="grid grid-cols-[1fr_auto] w-full h-full justify-center items-stretch">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(triggerVariants({ variant }), className)}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={cn(
            "text-warm-sand pointer-events-none size-16 shrink-0 translate-y-0.5 transition-transform duration-200"
          )}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content data-slot="accordion-content" {...props} suppressHydrationWarning>
      <motion.div
        initial={false}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={cn("pt-0 flex", className)}
      >
        {children}
      </motion.div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
