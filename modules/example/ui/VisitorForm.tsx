"use client";

import { useSubmitName } from "../hooks/useSubmitName";
import { Button } from "@/components/ui/button";

/**
 * Client component for visitor name form
 * Follows architecture: UI only, uses hooks for server interaction
 */
export function VisitorForm() {
  const { mutate: submitName, isPending } = useSubmitName();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    submitName(formData);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-sm font-medium">
        What&apos;s your name?
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          className="border-border bg-background focus:ring-ring/50 mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:ring focus:outline-none"
        />
      </label>
      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Saving..." : "Save to cookie"}
      </Button>
    </form>
  );
}
