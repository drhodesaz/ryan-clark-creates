import SubscribeForm from "@/components/SubscribeForm";

export default function SubscribePage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-amber-500 text-sm uppercase tracking-widest">Newsletter</span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mt-4 mb-6">
            Stay Connected
          </h1>
          <p className="text-neutral-300 text-xl leading-relaxed">
            Get updates on new book releases, vinyl drops, art exhibitions,
            and behind-the-scenes content delivered straight to your inbox.
          </p>
        </div>
      </section>

      {/* Subscribe Form */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-md mx-auto">
          <SubscribeForm showHeading={false} />

          <div className="mt-12 pt-12 border-t border-neutral-800">
            <h3 className="font-semibold mb-4 text-center">What You&apos;ll Get</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">New Releases</p>
                  <p className="text-neutral-400 text-sm">
                    Be the first to know about new books and records
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Fine Art Updates</p>
                  <p className="text-neutral-400 text-sm">
                    Early access when the art collection launches
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Exclusive Content</p>
                  <p className="text-neutral-400 text-sm">
                    Behind-the-scenes stories and subscriber-only offers
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <p className="mt-8 text-neutral-500 text-sm text-center">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </main>
  );
}
