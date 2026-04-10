import Image from "next/image";
import Link from "next/link";

const books = [
  {
    title: "Spirits of Jerome",
    image: "/images/books/sprits.jpg",
    description: "A journey through Arizona's most haunted town",
    link: "/ghostwriterpress#spirits-of-jerome",
  },
  {
    title: "Ghost Songs",
    image: "/images/books/ghostsongs.jpg",
    description: "Celebrating the Phoenix music scene",
    link: "/ghostwriterpress#ghost-songs",
  },
  {
    title: "ManInfest Destiny",
    image: "/images/books/maninfest1.jpg",
    description: "A novella",
    link: "/ghostwriterpress#manifest-destiny",
  },
  {
    title: "Kindred Spirits & Mirrored Souls",
    image: "/images/books/kindred.jpg",
    description: "Poetry & photographs",
    link: "/ghostwriterpress#kindred-spirits",
  },
];

const records = [
  {
    title: "Hookworm ONE",
    image: "/images/records/HWR_Hookworm1_07172021_v2-02.jpg",
    artists: "The Woodworks, Paper Foxes, Shovel, The Psychedelephants",
    link: "/hookwormrecords#hookworm-one",
  },
  {
    title: "Hookworm TWO",
    image: "/images/records/jacketv5.jpg",
    artists: "Fairy Bones, Chrome Rhino, Birds and Arrows & more",
    link: "/hookwormrecords#hookworm-two",
  },
  {
    title: "Electric Bones",
    image: "/images/records/electric-bones-front.jpg",
    artists: "Birds & Arrows",
    link: "/hookwormrecords#electric-bones",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/90 to-neutral-950" />
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/photos/RyanClark(1).jpg"
            alt="Ryan Clark"
            fill
            className="object-contain object-top"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            Ryan Clark <span className="text-amber-500">Creates</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Books. Records. Art.
          </p>
          <p className="text-lg text-neutral-400 mb-12 max-w-xl mx-auto">
            Documenting the stories, sounds, and spirits of the Southwest through words, music, and images.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ghostwriterpress"
              className="px-8 py-4 bg-amber-500 text-neutral-950 font-semibold rounded-full hover:bg-amber-400 transition-colors"
            >
              Ghost Writer Press
            </Link>
            <Link
              href="/hookwormrecords"
              className="px-8 py-4 border border-neutral-600 text-neutral-100 font-semibold rounded-full hover:border-amber-500 hover:text-amber-500 transition-colors"
            >
              Hookworm Records
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-amber-500 text-sm uppercase tracking-widest">Ghost Writer Press</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-2">Books</h2>
            </div>
            <Link
              href="/ghostwriterpress"
              className="hidden sm:flex items-center gap-2 text-neutral-400 hover:text-amber-500 transition-colors"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book) => (
              <Link key={book.title} href={book.link} className="group">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-neutral-800">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-playfair text-xl font-semibold group-hover:text-amber-500 transition-colors">
                  {book.title}
                </h3>
                <p className="text-neutral-400 text-sm mt-1">{book.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/ghostwriterpress"
              className="inline-flex items-center gap-2 text-amber-500"
            >
              View All Books
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Records Section */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-amber-500 text-sm uppercase tracking-widest">Vinyl Compilations</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-2">Hookworm Records</h2>
            </div>
            <Link
              href="/hookwormrecords"
              className="hidden sm:flex items-center gap-2 text-neutral-400 hover:text-amber-500 transition-colors"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {records.map((record) => (
              <Link key={record.title} href={record.link} className="group">
                <div className="relative aspect-square rounded-lg overflow-hidden mb-6 bg-neutral-800">
                  <Image
                    src={record.image}
                    alt={record.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-playfair text-2xl font-semibold group-hover:text-amber-500 transition-colors">
                  {record.title}
                </h3>
                <p className="text-neutral-400 mt-2">{record.artists}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Image
              src="/images/logos/HR_LogoColor_onBk.png"
              alt="Hookworm Records"
              width={300}
              height={150}
              className="opacity-70"
            />
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/photos/RyanClark(1).jpg"
                alt="Ryan Clark"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-amber-500 text-sm uppercase tracking-widest">About</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-2 mb-6">Ryan B. Clark</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Arizona-based author, record label founder, and visual artist dedicated to capturing
                and celebrating the creative spirit of the Southwest. From the haunted streets of
                Jerome to the vibrant Phoenix music scene, Ryan&apos;s work explores the stories that
                make this region unique.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-8">
                Through Ghost Writer Press, Ryan publishes books that blend photography, poetry, and
                narrative. Hookworm Records showcases the best of Arizona&apos;s independent music
                community through carefully curated vinyl compilations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fine Art Teaser */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-amber-500 text-sm uppercase tracking-widest">Coming Soon</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-2 mb-6">
            Fine Art
          </h2>
          <p className="text-neutral-400 text-lg mb-8">
            Original artwork and limited edition prints. Be the first to know when the collection launches.
          </p>
          <Link
            href="/fineart"
            className="inline-flex px-8 py-4 border border-neutral-600 text-neutral-100 font-semibold rounded-full hover:border-amber-500 hover:text-amber-500 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-neutral-400 text-lg mb-8">
            Interested in booking, collaborations, or purchasing artwork?
            Get in touch.
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
