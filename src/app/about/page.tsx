import Image from "next/image";
import Link from "next/link";

const photos = [
  { src: "/images/photos/RyanClark(1).jpg", alt: "Ryan Clark in Phoenix" },
  { src: "/images/photos/RyanClark(2).jpg", alt: "Ryan Clark portrait" },
  { src: "/images/photos/RyanClark(3).jpg", alt: "Ryan Clark" },
  { src: "/images/photos/RyanClark(4).jpg", alt: "Ryan Clark" },
  { src: "/images/photos/RyanClark(5).jpg", alt: "Ryan Clark" },
  { src: "/images/photos/RyanClark(6).jpg", alt: "Ryan Clark" },
  { src: "/images/photos/1000015406.jpg", alt: "Ryan Clark" },
  { src: "/images/photos/1000015407.jpg", alt: "Ryan Clark" },
  { src: "/images/photos/291783813_10159836678428043_2718007396176746707_n.jpg", alt: "Ryan Clark" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/photos/RyanClark(1).jpg"
                alt="Ryan B. Clark"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="text-amber-500 text-sm uppercase tracking-widest">About</span>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mt-2 mb-6">
                Ryan B. Clark
              </h1>
              <p className="text-neutral-300 text-xl leading-relaxed mb-6">
                Author, record label founder, photographer, and visual artist dedicated to
                documenting and celebrating the creative spirit of the American Southwest.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Based in Arizona, Ryan&apos;s work spans multiple disciplines united by a deep
                connection to place and community. Through books, vinyl records, and visual art,
                he captures the stories, sounds, and spirits that define this unique region.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                His writing has explored the haunted history of Jerome, celebrated the Phoenix
                independent music scene, and delved into the complexities of the Southwest
                experience. As founder of Hookworm Records, he champions local musicians through
                carefully curated vinyl compilations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold mb-12 text-center">Creative Ventures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ghost Writer Press */}
            <div className="bg-neutral-900 rounded-lg p-8 border border-neutral-800">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/books/cropped-cropped-ghostwriter-final-2-1.png"
                  alt="Ghost Writer Press"
                  width={50}
                  height={50}
                  className="rounded"
                />
                <h3 className="font-playfair text-2xl font-bold">Ghost Writer Press</h3>
              </div>
              <p className="text-neutral-400 leading-relaxed mb-6">
                An independent publishing venture focused on books that blend narrative, photography,
                and poetry. Publications explore the rich cultural landscape of Arizona and the
                Southwest, from haunted historic towns to vibrant music scenes.
              </p>
              <Link
                href="/books"
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
              >
                View Books
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Hookworm Records */}
            <div className="bg-neutral-900 rounded-lg p-8 border border-neutral-800">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/logos/hookworm.png"
                  alt="Hookworm Records"
                  width={50}
                  height={50}
                  className="rounded"
                />
                <h3 className="font-playfair text-2xl font-bold">Hookworm Records</h3>
              </div>
              <p className="text-neutral-400 leading-relaxed mb-6">
                A vinyl record label dedicated to showcasing Arizona&apos;s independent music community.
                Each compilation brings together diverse artists, produced at Flying Blanket Recording
                with legendary engineer Bob Hoag.
              </p>
              <Link
                href="/records"
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
              >
                View Records
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold mb-8 text-center">Gallery</h2>
          <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
            Photos by Blushing Cactus Photography
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`relative rounded-lg overflow-hidden bg-neutral-800 ${
                  index === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accolades */}
      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold mb-8">Recognition</h2>
          <div className="flex justify-center mb-8">
            <Image
              src="/images/photos/bestofvalley.jpg"
              alt="Best of the Valley"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
          <p className="text-neutral-400 leading-relaxed">
            Ryan&apos;s contributions to Arizona&apos;s creative community have been recognized
            through various local publications and arts organizations. His work continues to
            document and preserve the cultural heritage of the Southwest.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-neutral-400 text-lg mb-8">
            For interviews, collaborations, speaking engagements, or to purchase original artwork.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-amber-500 text-neutral-950 font-semibold rounded-full hover:bg-amber-400 transition-colors"
          >
            Contact Ryan
          </Link>
        </div>
      </section>
    </main>
  );
}
