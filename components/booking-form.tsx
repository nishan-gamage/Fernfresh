"use client";

import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { bookingServices, frequencies } from "@/lib/booking";
import { site, whatsappLink } from "@/lib/site-config";

// No backend yet: the form composes a message and hands it to WhatsApp or the
// customer's email app. Swap onSubmit for a server action once there's a store.
export function BookingForm() {
  const params = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string | null>(null);

  const preService = params.get("service");
  const defaultService = bookingServices.find((s) => s === preService) ?? bookingServices[0];

  function buildMessage() {
    const form = formRef.current;
    if (!form) return null;
    if (!form.reportValidity()) return null;
    const d = new FormData(form);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const lines = [
      `Hi ${site.name}, I'd like a quote.`,
      "",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      get("email") && `Email: ${get("email")}`,
      `Service: ${get("service")}`,
      `How often: ${get("frequency")}`,
      `Suburb: ${get("suburb")}`,
      `Bedrooms / bathrooms: ${get("bedrooms")} / ${get("bathrooms")}`,
      get("date") && `Preferred date: ${get("date")}`,
      get("notes") && `Notes: ${get("notes")}`,
    ].filter(Boolean);
    return lines.join("\n");
  }

  function sendWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    const msg = buildMessage();
    if (!msg) return setError("Please fill in the highlighted fields.");
    setError(null);
    window.open(whatsappLink(msg), "_blank", "noopener");
  }

  function sendEmail() {
    const msg = buildMessage();
    if (!msg) return setError("Please fill in the highlighted fields.");
    setError(null);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Quote request")}&body=${encodeURIComponent(msg)}`;
  }

  const input =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition focus:border-fern-500 focus:ring-4 focus:ring-sage-200 user-invalid:border-red-400";
  const label = "mb-1.5 block text-sm font-medium text-fern-900";

  return (
    <form ref={formRef} onSubmit={sendWhatsApp} className="grid gap-5 sm:grid-cols-2">
      <label className="sm:col-span-2">
        <span className={label}>Service</span>
        <select name="service" defaultValue={defaultService} className={input}>
          {bookingServices.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label>
        <span className={label}>Your name</span>
        <input name="name" required autoComplete="name" className={input} />
      </label>
      <label>
        <span className={label}>Phone</span>
        <input name="phone" type="tel" required autoComplete="tel" className={input} />
      </label>
      <label>
        <span className={label}>
          Email <span className="font-normal text-muted">(optional)</span>
        </span>
        <input name="email" type="email" autoComplete="email" className={input} />
      </label>
      <label>
        <span className={label}>Suburb</span>
        <input
          name="suburb"
          required
          defaultValue={params.get("suburb") ?? ""}
          autoComplete="address-level2"
          className={input}
        />
      </label>
      <label>
        <span className={label}>Bedrooms</span>
        <select name="bedrooms" defaultValue={params.get("bedrooms") ?? "2"} className={input}>
          {["1", "2", "3", "4", "5+"].map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </label>
      <label>
        <span className={label}>Bathrooms</span>
        <select name="bathrooms" defaultValue="1" className={input}>
          {["1", "2", "3", "4+"].map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </label>
      <label>
        <span className={label}>How often</span>
        <select name="frequency" className={input}>
          {frequencies.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
      </label>
      <label>
        <span className={label}>
          Preferred date <span className="font-normal text-muted">(optional)</span>
        </span>
        <input name="date" type="date" className={input} />
      </label>
      <label className="sm:col-span-2">
        <span className={label}>
          Anything we should know? <span className="font-normal text-muted">(optional)</span>
        </span>
        <textarea
          name="notes"
          rows={4}
          placeholder="Pets, access, parking, check-in times, add-ons like oven or windows…"
          className={input}
        />
      </label>

      {error && (
        <p role="alert" className="text-sm text-red-700 sm:col-span-2">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-fern-800 px-6 py-4 text-sm font-medium text-cream transition-colors hover:bg-fern-900"
        >
          <MessageCircle className="h-4 w-4" aria-hidden /> Send via WhatsApp
        </button>
        <button
          type="button"
          onClick={sendEmail}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-fern-800/25 px-6 py-4 text-sm font-medium text-fern-900 transition-colors hover:border-fern-800"
        >
          <Mail className="h-4 w-4" aria-hidden /> Send by email
        </button>
      </div>
      <p className="text-xs text-muted sm:col-span-2">
        We use your details only to prepare your quote. No spam, ever.
      </p>
    </form>
  );
}
