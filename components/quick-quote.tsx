"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { bookingServices } from "@/lib/booking";

// Hero quote bar: collects three answers and hands them to /book as query params.
export function QuickQuote() {
  const router = useRouter();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    for (const key of ["service", "suburb", "bedrooms"]) {
      const v = String(data.get(key) ?? "").trim();
      if (v) params.set(key, v);
    }
    router.push(`/book?${params.toString()}`);
  }

  const field =
    "w-full bg-transparent text-[15px] text-fern-900 outline-none placeholder:text-muted/70";
  const label = "mb-1 block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted";

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-px overflow-hidden rounded-3xl bg-line shadow-2xl shadow-fern-950/30 sm:grid-cols-[1.3fr_1fr_0.8fr_auto] sm:rounded-full"
    >
      <label className="bg-cream px-6 py-3.5 sm:rounded-l-full sm:pl-8">
        <span className={label}>Service</span>
        <select name="service" defaultValue="Regular home clean" className={field}>
          {bookingServices.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="bg-cream px-6 py-3.5">
        <span className={label}>Suburb</span>
        <input name="suburb" placeholder="e.g. Remuera" className={field} autoComplete="address-level2" />
      </label>
      <label className="bg-cream px-6 py-3.5">
        <span className={label}>Bedrooms</span>
        <select name="bedrooms" defaultValue="2" className={field}>
          {["1", "2", "3", "4", "5+"].map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </label>
      <div className="bg-cream p-2 sm:rounded-r-full">
        <button
          type="submit"
          className="flex h-full w-full items-center justify-center gap-2 rounded-full bg-fern-800 px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-fern-900"
        >
          Get a quote <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </form>
  );
}
