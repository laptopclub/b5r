"use client";

import { useState } from "react";
import { EnquiryForm } from "./enquiry-form";

export function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="border border-ink bg-transparent px-3 py-2 font-mono text-sm leading-none text-ink uppercase outline-0 hover:bg-ink hover:text-surface-base focus-visible:bg-ink focus-visible:text-surface-base focus-visible:outline-0" onClick={() => setIsOpen(true)} type="button">
        Enquiry
      </button>
      {isOpen ? (
        <div aria-modal="true" className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" role="dialog">
          <div className="w-full max-w-xl border border-ui-strong bg-surface-base p-4 shadow-2xl sm:p-6">
            <div className="flex justify-end">
              <button aria-label="Close enquiry form" className="text-xl leading-none text-ink outline-0 hover:text-ink-muted focus-visible:outline focus-visible:outline-1 focus-visible:outline-ink" onClick={() => setIsOpen(false)} type="button">
                <i aria-hidden="true" className="bi bi-x-lg" />
              </button>
            </div>
            <EnquiryForm />
          </div>
        </div>
      ) : null}
    </>
  );
}
