"use client";

import * as React from "react";
import { InlineWidget } from "react-calendly";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = Omit<ButtonProps, "children"> & {
  label?: string;
  withArrow?: boolean;
};

export function BookDemoButton({
  label = "Book a demo",
  withArrow = true,
  variant = "primary",
  size = "default",
  className,
  ...rest
}: Props) {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={cn(className)} {...rest}>
          {label}
          {withArrow ? <ArrowRight className="h-4 w-4" /> : null}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <DialogTitle className="sr-only">Book a demo</DialogTitle>
        {calendlyUrl ? (
          <div className="h-[680px] w-full">
            <InlineWidget
              url={calendlyUrl}
              styles={{ height: "100%", width: "100%" }}
              pageSettings={{
                backgroundColor: "0F1011",
                primaryColor: "7B68EE",
                textColor: "F7F8F8",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
              }}
            />
          </div>
        ) : (
          <div className="p-10 text-center">
            <p className="type-body text-[var(--text-secondary)]">
              Calendly isn&apos;t configured yet. Set{" "}
              <code className="type-mono text-[var(--text-primary)]">
                NEXT_PUBLIC_CALENDLY_URL
              </code>{" "}
              to enable booking.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
