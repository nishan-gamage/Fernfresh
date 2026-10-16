"use client";

import { useRef, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site-config";

export function CareersForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string | null>(null);

  function buildMessage() {
    const form = formRef.current;
    if (!form || !form.reportValidity()) return null;
    const d = new FormData(form);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    return [
      `Hi ${site.name}, I'd like to apply to join the cleaning team.`,
      "",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      get("email") && `Email: ${get("email")}`,
      `Area: ${get("area")}`,
      `Availability: ${d.getAll("availability").join(", ") || "Not specified"}`,
      `Own transport: ${get("transport") || "No"}`,
      `Right to work in NZ: ${get("rtw") || "No"}`,
      get("experience") && `Experience: ${get("experience")}`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  function send(via: "whatsapp" | "email") {
    const msg = buildMessage();
    if (!msg) return setError("Please fill in the highlighted fields.");
    setError(null);
    if (via === "whatsapp") window.open(whatsappLink(msg), "_blank", "noopener");
    else
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Cleaner application")}&body=${encodeURIComponent(msg)}`;
  }

  const input =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition focus:border-fern-500 focus:ring-4 focus:ring-sage-200 user-invalid:border-red-400";
  const label = "mb-1.5 block text-sm font-medium text-fern-900";
  const check = "flex items-center gap-2.5 text-sm text-ink";

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        send("whatsapp");
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      <label>
        <span className={label}>Full name</span>
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
        <span className={label}>Where in Auckland are you based?</span>
        <input name="area" required className={input} />
      </label>

      <fieldset className="sm:col-span-2">
        <legend className={label}>Availability</legend>
        <div className="mt-1 flex flex-wrap gap-x-6 gap-y-3">
          {["Weekdays", "Weekends", "Mornings", "Afternoons", "Short-notice turnovers"].map((a) => (
            <label key={a} className={check}>
              <input type="checkbox" name="availability" value={a} className="h-4 w-4 accent-fern-700" />
              {a}
            </label>
          ))}
        </div>
      </fieldset>

      <label className={check}>
        <input type="checkbox" name="transport" value="Yes" className="h-4 w-4 accent-fern-700" />I have my own
        transport
      </label>
      <label className={check}>
        <input type="checkbox" name="rtw" value="Yes" required className="h-4 w-4 accent-fern-700" />I have the
        right to work in New Zealand
      </label>

      <label className="sm:col-span-2">
        <span className={label}>
          Tell us about your experience <span className="font-normal text-muted">(optional)</span>
        </span>
        <textarea name="experience" rows={4} className={input} />
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
          <MessageCircle className="h-4 w-4" aria-hidden /> Apply via WhatsApp
        </button>
        <button
          type="button"
          onClick={() => send("email")}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-fern-800/25 px-6 py-4 text-sm font-medium text-fern-900 transition-colors hover:border-fern-800"
        >
          <Mail className="h-4 w-4" aria-hidden /> Apply by email
        </button>
      </div>
    </form>
  );
}
