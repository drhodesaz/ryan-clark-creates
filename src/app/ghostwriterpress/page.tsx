"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getBooks, Product } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";
import InventoryBadge from "@/components/InventoryBadge";

function FlippableBookCover({ book }: { book: Product }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (book.altImage) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className="relative group">
      <div
        onClick={handleClick}
        className={`relative aspect-[3/4] rounded-lg overflow-visible bg-neutral-800 shadow-2xl cursor-pointer ${
          book.altImage ? "hover:shadow-amber-500/20" : ""
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
              src={book.image}
              alt={book.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Back Cover */}
          {book.altImage && (
            <div
              className="absolute inset-0 rounded-lg overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <Image
                src={book.altImage}
                alt={`${book.title} back cover`}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>

        {/* Click indicator */}
        {book.altImage && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
            <span className="px-3 py-1 bg-neutral-900/80 backdrop-blur-sm text-amber-500 text-sm font-mono rounded-full border border-amber-500/30">
              &laquo; click &raquo;
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function GhostWriterPressPage() {
  const books = getBooks();

  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/images/books/cropped-cropped-ghostwriter-final-2-1.png"
              alt="Ghost Writer Press"
              width={60}
              height={60}
              className="rounded"
            />
            <div>
              <span className="text-amber-500 text-sm uppercase tracking-widest">Ghost Writer Press</span>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold">Books</h1>
            </div>
          </div>
          <p className="text-neutral-400 text-lg max-w-2xl">
            Exploring the stories, spirits, and sounds of the Southwest through narrative,
            photography, and poetry. Each book is a journey into the unique character of Arizona
            and the creative communities that call it home.
          </p>
        </div>
      </section>

      {/* Books List */}
      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto space-y-24">
          {books.map((book, index) => (
            <article
              key={book.id}
              id={book.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <FlippableBookCover book={book} />
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {book.details && (
                  <span className="text-amber-500 text-sm uppercase tracking-widest">
                    {book.details}
                  </span>
                )}
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-2 mb-2">
                  {book.title}
                </h2>
                {book.subtitle && (
                  <p className="text-neutral-400 text-lg mb-6">{book.subtitle}</p>
                )}
                <blockquote className="text-neutral-300 text-lg leading-relaxed mb-8 border-l-2 border-amber-500 pl-6 italic">
                  {book.description}
                </blockquote>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                  <span className="text-2xl font-bold text-amber-500">
                    ${book.price.toFixed(2)}
                  </span>
                  <AddToCartButton product={book} />
                </div>
                <InventoryBadge inventory={book.inventory} />
              </div>

            </article>
          ))}
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6">About the Author</h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-8">
            Ryan B. Clark is an Arizona-based author and artist whose work captures the unique
            character of the American Southwest. His books blend rich storytelling with visual
            artistry, offering readers an immersive experience into the places and communities
            that inspire him.
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
      </section>
    </main>
  );
}
