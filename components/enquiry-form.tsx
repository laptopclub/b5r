"use client";

import { useActionState } from "react";
import { sendEnquiry, type EnquiryState } from "../app/actions";

const initialState: EnquiryState = { message: "", status: "idle" };

export function EnquiryForm() {
  const [state, formAction, pending] = useActionState(sendEnquiry, initialState);

  return (
    <form action={formAction}>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input autoComplete="off" id="company" name="company" tabIndex={-1} type="text" />
      </div>

      <label htmlFor="name">Name</label>
      <input autoComplete="name" id="name" name="name" required />

      <label htmlFor="email">Email</label>
      <input autoComplete="email" id="email" name="email" required type="email" />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required rows={6} />

      <button disabled={pending} type="submit">
        {pending ? "Sending..." : "Send enquiry"}
      </button>
      <p aria-live="polite" className={state.status === "error" ? "form-message error" : "form-message"}>
        {state.message}
      </p>
    </form>
  );
}
