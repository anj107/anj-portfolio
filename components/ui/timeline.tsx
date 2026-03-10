import * as React from "react"

import { cn } from "@/lib/utils"

const Timeline = React.forwardRef<HTMLOListElement, React.ComponentProps<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "relative pl-8 before:absolute before:left-[0.35rem] before:top-1 before:h-[calc(100%-0.5rem)] before:w-px before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent",
        className
      )}
      {...props}
    />
  )
)
Timeline.displayName = "Timeline"

const TimelineItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(
      "group relative ml-1 before:absolute before:-left-[1.7rem] before:top-2 before:h-3.5 before:w-3.5 before:rounded-full before:border before:border-primary before:bg-background before:shadow-[0_0_0_5px_hsl(var(--background))] after:absolute after:-left-[1.52rem] after:top-[0.66rem] after:h-2 after:w-2 after:rounded-full after:bg-primary/80",
      className
    )}
    {...props}
  />
))
TimelineItem.displayName = "TimelineItem"

const TimelineHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props} />
))
TimelineHeader.displayName = "TimelineHeader"

const TimelineTime = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary",
      className
    )}
    {...props}
  />
))
TimelineTime.displayName = "TimelineTime"

const TimelineTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<"h3">
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-base font-bold leading-tight text-foreground md:text-lg", className)}
    {...props}
  />
))
TimelineTitle.displayName = "TimelineTitle"

const TimelineDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-3 text-sm leading-relaxed text-muted-foreground", className)}
    {...props}
  />
))
TimelineDescription.displayName = "TimelineDescription"

const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-start justify-between gap-4 rounded-2xl border border-border/70 bg-gradient-to-br from-card via-card to-card/80 p-4 shadow-md shadow-primary/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/10 md:p-5",
      className
    )}
    {...props}
  />
))
TimelineContent.displayName = "TimelineContent"

const TimelineLogo = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      " h-30 w-auto shrink-0 items-center justify-center rounded-xl shadow-sm md:flex",
      className
    )}
    {...props}
  />
))
 .displayName = "TimelineLogo"

export {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineTime,
  TimelineTitle,
  TimelineDescription,
  TimelineContent,
  TimelineLogo,
}
