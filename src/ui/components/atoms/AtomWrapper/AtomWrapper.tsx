"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@utils";

const variants = cva(
    "",
    {
        variants: {
            variant: {
                default: "w-full",
                headerHome: cn(
                    "absolute top-0 left-0",
                    "flex flex-col justify-center items-center w-[51.9rem] min-w-[51.9rem] h-[100dvh] bg-primary-black p-[4rem] gap-y-[4.8rem] bg-white",
                )
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

interface AtomWrapperProps extends React.ComponentProps<"div"> {
    variant?: VariantProps<typeof variants>["variant"];
    asChild?: boolean;
}

export const AtomWrapper = ({ children, variant = "default", className, asChild = false, ...props }: AtomWrapperProps) => {
    const Component = asChild ? Slot : "div";

    return (
        <Component className={cn(variants({ variant, className }))} {...props}>
            {children}
        </Component>
    )
}
