import Image from "next/image";
import Link from "next/link";

const records = [
  {
    id: "hookworm-one",
    title: "Hookworm ONE",
    year: "2021",
    frontImage: "/images/records/HWR_Hookworm1_07172021_v2-01.jpg",
    backImage: "/images/records/HWR_Hookworm1_07172021_v2-02.jpg",
    gallery: [
      "/images/records/HWR_AlbumInsert_Left.jpg",
      "/images/records/HWR_AlbumInsert_Right.jpg",
      "/images/records/1000015388.jpg",
      "/images/records/1000015389.jpg",
      "/images/records/1000015390.jpg",
      "/images/records/1000015391.jpg",
    ],
    tracks: [
      { side: "A", number: 1, title: "Callus", artist: "The Woodworks" },
      { side: "A", number: 2, title: "Power Out", artist: "Paper Foxes" },
      { side: "B", number: 3, title: "Flyswatter", artist: "Shovel" },
      { side: "B", number: 4, title: "Triangle Shy", artist: "The Psychedelephants" },
    ],
    description: "The debut compilation from Hookworm Records showcasing four of Arizona's finest independent bands. Produced, engineered, and mixed by Bob Hoag at Flying Blanket Recording, Mesa, AZ.",
    credits: "Mastered by Jason Livermore at The Blasting Room, Fort Collins, CO. Original artwork by Zig Rhea. Alternative inner art/worm by Brett Ridler.",
    price: "$25.00",
    buyLink: "#",
  },
  {
    id: "hookworm-two",
    title: "Hookworm TWO",
    year: "2023",
    frontImage: "/images/records/jacketv5.jpg",
    backImage: "/images/records/INSERT-side-one-v1.jpg",
    gallery: [
      "/images/records/INSERT-sidetwo-v1.jpg",
      "/images/records/HookwormTWO-Jacketv1.jpg",
      "/images/records/1000015392.jpg",
      "/images/records/1000015393.jpg",
      "/images/records/1000015394 (1).jpg",
    ],
    tracks: [
      { side: "A", number: 1, title: "Wish I Wasn't This Way", artist: "Fairy Bones" },
      { side: "A", number: 2, title: "Escape Velocity", artist: "Chrome Rhino" },
      { side: "A", number: 3, title: "The Chemical Tide", artist: "Birds and Arrows" },
      { side: "B", number: 4, title: "Power Shifter", artist: "Daphne + The Glitches" },
      { side: "B", number: 5, title: "Taxes Two", artist: "Sliced Limes" },
      { side: "B", number: 6, title: "Weekend Lovers", artist: "The Beaters" },
    ],
    description: "The second volume expands on the mission, featuring six tracks from Arizona's thriving indie scene. Bold, eclectic, and unmistakably Southwest.",
    credits: "Produced by Bob Hoag. Mastered by Jason Livermore.",
    price: "$25.00",
    buyLink: "#",
  },
];

export default function RecordsPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
            <Image
              src="/images/logos/HR_LogoColor_onBk.png"
              alt="Hookworm Records"
              width={280}
              height={140}
            />
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold">Hookworm Records</h1>
              <p className="text-neutral-400 text-lg mt-2">
                Vinyl compilations celebrating Arizona&apos;s independent music community
              </p>
            </div>
          </div>
          <p className="text-neutral-300 max-w-3xl leading-relaxed">
            Hookworm Records is dedicated to documenting and preserving the vibrant independent
            music scene of Arizona. Each compilation brings together diverse artists united by
            their commitment to authentic, boundary-pushing music. All records are produced at
            Flying Blanket Recording in Mesa, AZ.
          </p>
        </div>
      </section>

      {/* Records */}
      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto space-y-32">
          {records.map((record) => (
            <article key={record.id} id={record.id} className="scroll-mt-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Album Art */}
                <div className="space-y-6">
                  <div className="relative group">
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-800 shadow-2xl">
                      <Image
                        src={record.frontImage}
                        alt={`${record.title} front cover`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Vinyl peeking out effect */}
                    <div className="absolute top-1/2 -right-4 w-[90%] aspect-square rounded-full bg-neutral-800 -translate-y-1/2 -z-10 opacity-80">
                      <div className="absolute inset-0 rounded-full border-4 border-neutral-700" />
                      <div className="absolute inset-[30%] rounded-full bg-amber-500/20" />
                      <div className="absolute inset-[45%] rounded-full bg-neutral-900" />
                    </div>
                  </div>
                  <div className="relative aspect-[2/1] rounded-lg overflow-hidden bg-neutral-800">
                    <Image
                      src={record.backImage}
                      alt={`${record.title} back cover`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <div>
                  <span className="text-amber-500 text-sm uppercase tracking-widest">{record.year}</span>
                  <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-2 mb-6">
                    {record.title}
                  </h2>
                  <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                    {record.description}
                  </p>

                  {/* Tracklist */}
                  <div className="mb-8">
                    <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Tracklist</h3>
                    <div className="space-y-1">
                      {record.tracks.map((track) => (
                        <div
                          key={`${track.side}-${track.number}`}
                          className="flex items-center gap-4 py-2 border-b border-neutral-800"
                        >
                          <span className="text-amber-500 font-mono text-sm w-8">
                            {track.side}{track.number}
                          </span>
                          <span className="flex-1 text-neutral-100">{track.title}</span>
                          <span className="text-neutral-400">{track.artist}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-neutral-500 text-sm mb-8">{record.credits}</p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <span className="text-2xl font-bold text-amber-500">{record.price}</span>
                    <Link
                      href={record.buyLink}
                      className="px-8 py-3 bg-amber-500 text-neutral-950 font-semibold rounded-full hover:bg-amber-400 transition-colors"
                    >
                      Buy Vinyl
                    </Link>
                    <Link
                      href="#"
                      className="text-neutral-400 hover:text-amber-500 transition-colors"
                    >
                      Listen on Bandcamp
                    </Link>
                  </div>
                </div>
              </div>

              {/* Gallery Section */}
              {record.gallery && record.gallery.length > 0 && (
                <div className="mt-16">
                  <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-6">Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {record.gallery.map((image, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-square rounded-lg overflow-hidden bg-neutral-800 group cursor-pointer"
                      >
                        <Image
                          src={image}
                          alt={`${record.title} gallery image ${idx + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6">The Mission</h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-6">
            Hookworm Records exists to shine a light on the incredible independent music
            being made in Arizona. From Phoenix to Tucson, from rock to experimental,
            we curate compilations that capture the spirit and diversity of our local scene.
          </p>
          <p className="text-neutral-500">
            Interested in being featured? Want to stock our records?{" "}
            <Link href="/contact" className="text-amber-500 hover:text-amber-400">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
