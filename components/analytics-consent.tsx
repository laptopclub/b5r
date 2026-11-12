"use client";

import { AnalyticsConsentProvider, useAnalyticsConsent } from "@laptopclub/foundation-analytics";

const measurementId = "G-DL65XSG3WM";

function ConsentBanner() {
  const { consent, denyConsent, grantConsent, isReady } = useAnalyticsConsent();

  if (!isReady || consent) {
    return null;
  }

  return (
    <section aria-label="Analytics consent" className="fixed bottom-4 left-1/2 z-[80] w-[min(28rem,calc(100vw-2rem))] -translate-x-1/2 border border-ink bg-surface-base p-3 shadow-2xl">
      <p className="m-0 text-sm leading-5">B5R uses optional analytics cookies to understand visits.</p>
      <div className="mt-3 flex justify-end gap-2">
        <button className="border border-ink bg-transparent px-3 py-2 text-sm leading-none uppercase outline-0 hover:bg-ink hover:text-surface-base focus-visible:bg-ink focus-visible:text-surface-base focus-visible:outline-0" onClick={denyConsent} type="button">
          Decline
        </button>
        <button className="border border-ink bg-transparent px-3 py-2 text-sm leading-none uppercase outline-0 hover:bg-ink hover:text-surface-base focus-visible:bg-ink focus-visible:text-surface-base focus-visible:outline-0" onClick={grantConsent} type="button">
          Accept
        </button>
      </div>
    </section>
  );
}

export function B5RAnalyticsConsent() {
  return (
    <AnalyticsConsentProvider measurementId={measurementId} storageKey="b5r.analytics-consent">
      <ConsentBanner />
    </AnalyticsConsentProvider>
  );
}
