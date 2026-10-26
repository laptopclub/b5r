"use client";

import { useState } from "react";
import { EnquiryForm } from "./enquiry-form";

export function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="rounded border border-ink bg-transparent px-3 py-2 text-sm leading-none text-ink outline-0 hover:bg-ink hover:text-surface-base focus-visible:bg-ink focus-visible:text-surface-base focus-visible:outline-0" onClick={() => setIsOpen(true)} type="button">
        Enquiry
      </button>
      {isOpen ? (
        <div aria-modal="true" className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4" role="dialog">
          <div className="w-full max-w-xl rounded border border-ui-strong bg-surface-base p-4 shadow-2xl sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <h1 className="m-0 text-base font-bold leading-6">Enquiry</h1>
              <button aria-label="Close enquiry form" className="rounded border border-ink bg-transparent px-2 py-1 text-sm leading-none text-ink outline-0 hover:bg-ink hover:text-surface-base focus-visible:bg-ink focus-visible:text-surface-base focus-visible:outline-0" onClick={() => setIsOpen(false)} type="button">
                Close
              </button>
            </div>
            <p className="m-0 mt-4 text-base leading-6">Tell me a little about what you have in mind.</p>
            <EnquiryForm />
          </div>
        </div>
      ) : null}
    </>
  );
}
