"use client";

import type { Route } from "next";
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";

type BackButtonProps = {
  fallbackHref?: Route | string;
  label?: string;
  className?: string;
};

export function BackButton({
  fallbackHref = "/",
  label = "Back",
  className,
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push(fallbackHref as Route);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition hover:text-neutral-900 ${className}`}
      aria-label={label}
    >
      <Undo2 className="h-4 w-4 transition group-hover:-translate-x-0.5" />
      <span>{label}</span>
    </button>
  );
}
