"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getRecords, Product } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";
import InventoryBadge from "@/components/InventoryBadge";
import ImageCarousel from "@/components/ImageCarousel";

function FlippableRecordCover({ record }: { record: Product }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (record.altImage) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className="relative group">
      <div
        onClick={handleClick}
        className={`relative aspect-square rounded-lg overflow-visible bg-neutral-800 shadow-2xl cursor-pointer ${
          record.altImage ? "hover:shadow-amber-500/20" : ""
        }`}
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative w-full h-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(-180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front Cover */}
          <div
            className="absolute inset-0 rounded-lg overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src={record.image}
              alt={`${record.title} front cover`}
              fill
              className="object-contain"
            />
          </div>

          {/* Back Cover */}
          {record.altImage && (
            <div
              className="absolute inset-0 rounded-lg overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <Image
                src={record.altImage}
                alt={`${record.title} back cover`}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>

        {/* Click indicator */}
        {record.altImage && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
            <span className="px-3 py-1 bg-neutral-900/80 backdrop-blur-sm text-amber-500 text-sm font-mono rounded-full border border-amber-500/30">
              &laquo; click &raquo;
            </span>
          </div>
        )}
      </div>

      {/* Vinyl peeking out effect */}
      <div className="absolute top-1/2 -right-4 w-[90%] aspect-square rounded-full bg-neutral-800 -translate-y-1/2 -z-10 opacity-80">
        <div className="absolute inset-0 rounded-full border-4 border-neutral-700" />
        <div className="absolute inset-[30%] rounded-full bg-amber-500/20" />
        <div className="absolute inset-[45%] rounded-full bg-neutral-900" />
      </div>
    </div>
  );
}

export default function HookwormRecordsPage() {
  const records = getRecords();

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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Album Art - Carousel if gallery exists, otherwise flippable cover */}
                <div className="space-y-6">
                  {record.gallery && record.gallery.length > 0 ? (
                    <ImageCarousel images={record.gallery} title={record.title} inline />
                  ) : (
                    <FlippableRecordCover record={record} />
                  )}
                </div>

                {/* Details */}
                <div>
                  {record.year && (
                    <span className="text-amber-500 text-sm uppercase tracking-widest">{record.year}</span>
                  )}
                  <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-2 mb-2">
                    {record.title}
                  </h2>
                  {record.subtitle && (
                    <p className="text-neutral-400 text-xl mb-6">{record.subtitle}</p>
                  )}
                  <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                    {record.description}
                  </p>

                  {/* Tracklist */}
                  {record.tracks && record.tracks.length > 0 && (
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
                  )}

                  {record.credits && (
                    <p className="text-neutral-500 text-sm mb-8">{record.credits}</p>
                  )}

                  {record.details && (
                    <p className="text-amber-500 text-sm font-semibold mb-4">{record.details}</p>
                  )}

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                    <span className="text-2xl font-bold text-amber-500">
                      ${record.price.toFixed(2)}
                    </span>
                    <AddToCartButton product={record} />
                  </div>
                  <InventoryBadge inventory={record.inventory} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Shipping Info */}
      <section className="py-12 px-6 bg-neutral-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="p-6 rounded-lg bg-neutral-900">
              <h3 className="text-amber-500 font-semibold mb-2">Free Shipping</h3>
              <p className="text-neutral-300">Orders over $40.00 in the lower 48 states</p>
            </div>
            <div className="p-6 rounded-lg bg-neutral-900">
              <h3 className="text-amber-500 font-semibold mb-2">Shipping</h3>
              <p className="text-neutral-300">United States & Canada only — $10.00</p>
            </div>
          </div>
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
