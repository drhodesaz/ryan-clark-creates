import SubscribeForm from "@/components/SubscribeForm";

export default function FineArtPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-amber-500 text-sm uppercase tracking-widest">Coming Soon</span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mt-4 mb-6">
            Fine Art
          </h1>
          <p className="text-neutral-300 text-xl leading-relaxed mb-8">
            Original artwork and limited edition prints by Ryan B. Clark.
            Capturing the spirit, landscapes, and stories of the American Southwest.
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto" />
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-neutral-800 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Something Beautiful is Coming
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              The Fine Art collection is currently being curated. Original paintings,
              photography prints, and mixed media pieces will be available soon.
              Each piece tells a story of the Southwest.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
            <h3 className="font-playfair text-2xl font-bold mb-2">
              Be the First to Know
            </h3>
            <p className="text-neutral-400 mb-6">
              Subscribe to get notified when the Fine Art collection launches.
              Early subscribers get first access to limited edition pieces.
            </p>
            <SubscribeForm showHeading={false} />
          </div>
        </div>
      </section>

      {/* Preview Teaser */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-neutral-500 text-lg italic">
            &ldquo;Art is how I process the world around me. The desert, the people,
            the stories that live in the cracks of old buildings and the eyes of strangers.
            Soon, I&apos;ll be sharing that with you.&rdquo;
          </p>
          <p className="text-amber-500 mt-4">— Ryan B. Clark</p>
        </div>
      </section>
    </main>
  );
}
