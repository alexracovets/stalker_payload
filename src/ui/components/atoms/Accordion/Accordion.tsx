"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@utils";
import { cva, VariantProps } from "class-variance-authority";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

const triggerVariants = cva(
  "disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 transition-all ease-in-out duration-300",
  {
    variants: {
      variant: {
        default:
          "flex justify-between items-center w-full h-full outline-main-border",
        section_view: cn(
          "flex justify-between items-center w-full h-full p-[16px] cursor-pointer border border-main-border rounded-[4px] bg-accordion-bg"
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
    <AccordionPrimitive.Header className="flex w-full h-full justify-center items-center flex-1">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(triggerVariants({ variant }), className)}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-warm-sand pointer-events-none size-16 shrink-0 translate-y-0.5 transition-transform duration-200" />
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
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
      {...props}
    >
      <div className={cn("pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
