"use client";

import { useActionState } from "react";
import { sendEnquiry, type EnquiryState } from "../app/actions";

const initialState: EnquiryState = { message: "", status: "idle" };
const fieldClassName = "w-full rounded border border-ui-strong bg-surface-raised p-2 text-base leading-6 text-ink outline-0 focus-visible:border-accent focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent";

export function EnquiryForm() {
  const [state, formAction, pending] = useActionState(sendEnquiry, initialState);

  return (
    <form action={formAction} className="mt-6 grid gap-2">
      <div aria-hidden="true" className="absolute left-[-10000px] size-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input autoComplete="off" id="company" name="company" tabIndex={-1} type="text" />
      </div>

      <label className="text-base leading-6" htmlFor="name">Name</label>
      <input autoComplete="name" className={fieldClassName} id="name" name="name" required />

      <label className="text-base leading-6" htmlFor="email">Email</label>
      <input autoComplete="email" className={fieldClassName} id="email" name="email" required type="email" />

      <label className="text-base leading-6" htmlFor="message">Message</label>
      <textarea className={`${fieldClassName} resize-y`} id="message" name="message" required rows={6} />

      <button className="mt-2 w-full cursor-pointer rounded border border-ink bg-transparent p-2 text-left text-base leading-6 text-ink outline-0 hover:bg-accent hover:text-accent-contrast focus-visible:bg-accent focus-visible:text-accent-contrast focus-visible:outline-0 disabled:cursor-wait disabled:border-ui disabled:bg-transparent disabled:text-ink-muted" disabled={pending} type="submit">
        {pending ? "Sending..." : "Send enquiry"}
      </button>
      <p aria-live="polite" className={`m-0 min-h-6 text-base leading-6 ${state.status === "error" ? "underline" : ""}`}>
        {state.message}
      </p>
    </form>
  );
}
