/**
 * @source https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/avatar.tsx
 * @author shadcn
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border",
      className
    )}
    {...props}
  />
));
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, alt = "", onError, ...props }, ref) => {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) return null;

  return (
    <img
      ref={ref}
      alt={alt}
      onError={(e) => {
        setHasError(true);
        onError?.(e);
      }}
      className={cn("aspect-square h-full w-full object-cover", className)}
      {...props}
    />
  );
});
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
