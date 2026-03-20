import Link from "next/link";
import { siteConfig } from "@/data/config";

export default function ContactPage() {
  const isCommissionsOpen = siteConfig.commissionsStatus === "open";

  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-amber-500 text-sm uppercase tracking-widest">Get in Touch</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mt-2 mb-6">Contact</h1>
          <p className="text-neutral-400 text-lg">
            Have a question about books, records, or artwork? Interested in collaborations
            or gallery representation? Reach out below.
          </p>
        </div>
      </section>

      {/* Commissions Status */}
      <section className="py-12 px-6 bg-neutral-950">
        <div className="max-w-3xl mx-auto">
          <div
            className={`relative overflow-hidden rounded-2xl border ${
              isCommissionsOpen
                ? "bg-green-500/5 border-green-500/20"
                : "bg-red-500/5 border-red-500/20"
            }`}
          >
            <div className="p-8 text-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <span
                  className={`w-4 h-4 rounded-full ${
                    isCommissionsOpen ? "bg-green-500" : "bg-red-500"
                  } animate-pulse`}
                />
                <span
                  className={`text-xl font-bold uppercase tracking-widest ${
                    isCommissionsOpen ? "text-green-500" : "text-red-500"
                  }`}
                >
                  Commissions {isCommissionsOpen ? "Open" : "Closed"}
                </span>
              </div>
              <p className="text-neutral-400 max-w-md mx-auto">
                {isCommissionsOpen
                  ? "Currently accepting commission requests. Reach out below to discuss your project."
                  : "Commission slots are currently filled. Subscribe to the newsletter to be notified when new slots open."}
              </p>
              {!isCommissionsOpen && (
                <Link
                  href="/subscribe"
                  className="inline-flex items-center gap-2 mt-4 text-amber-500 hover:text-amber-400 transition-colors"
                >
                  Get Notified
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Sections */}
      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Galleries */}
            <div className="bg-neutral-900 rounded-lg p-8 border border-neutral-800">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h2 className="font-playfair text-2xl font-bold mb-4">Galleries</h2>
              <p className="text-neutral-400 mb-6">
                Interested in representing Ryan&apos;s work or hosting an exhibition?
                We&apos;d love to hear from you.
              </p>
              <a
                href={`mailto:${siteConfig.emails.galleries}`}
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {siteConfig.emails.galleries}
              </a>
            </div>

            {/* Commissions */}
            <div className="bg-neutral-900 rounded-lg p-8 border border-neutral-800">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <h2 className="font-playfair text-2xl font-bold mb-4">Commissions</h2>
              <p className="text-neutral-400 mb-6">
                Looking to commission a custom piece? Inquire about availability,
                pricing, and project details.
              </p>
              <a
                href={`mailto:${siteConfig.emails.commissions}`}
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {siteConfig.emails.commissions}
              </a>
            </div>

            {/* General Inquiries */}
            <div className="bg-neutral-900 rounded-lg p-8 border border-neutral-800">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h2 className="font-playfair text-2xl font-bold mb-4">General Inquiries</h2>
              <p className="text-neutral-400 mb-6">
                Questions about books, records, events, or anything else?
                Drop us a line.
              </p>
              <a
                href={`mailto:${siteConfig.emails.general}`}
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {siteConfig.emails.general}
              </a>
            </div>

            {/* Social */}
            <div className="bg-neutral-900 rounded-lg p-8 border border-neutral-800">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="font-playfair text-2xl font-bold mb-4">Follow Along</h2>
              <p className="text-neutral-400 mb-6">
                Stay connected and see what&apos;s happening behind the scenes.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-400 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-400 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href={siteConfig.social.bandcamp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-400 transition-colors"
                >
                  Bandcamp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-2xl font-bold mb-8 text-center">Shop</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/ghostwriterpress"
              className="bg-neutral-950 rounded-lg p-6 border border-neutral-800 text-center hover:border-amber-500/50 transition-colors group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-amber-500 transition-colors">
                Ghost Writer Press
              </h3>
              <p className="text-neutral-400 text-sm">
                Browse and purchase books
              </p>
            </Link>
            <Link
              href="/hookwormrecords"
              className="bg-neutral-950 rounded-lg p-6 border border-neutral-800 text-center hover:border-amber-500/50 transition-colors group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-amber-500 transition-colors">
                Hookworm Records
              </h3>
              <p className="text-neutral-400 text-sm">
                Get vinyl compilations
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
