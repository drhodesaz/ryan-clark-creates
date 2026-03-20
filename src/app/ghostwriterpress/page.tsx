"use client";

import Image from "next/image";
import Link from "next/link";
import { getBooks } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";
import InventoryBadge from "@/components/InventoryBadge";

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
                <div className="relative group">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-neutral-800 shadow-2xl">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Decorative second cover */}
                  {book.altImage && (
                    <div className="absolute -bottom-4 -right-4 w-1/2 aspect-[3/4] rounded-lg overflow-hidden bg-neutral-800 shadow-xl opacity-50 -z-10">
                      <Image
                        src={book.altImage}
                        alt={`${book.title} back cover`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
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

              {/* Gallery Section */}
              {book.gallery && book.gallery.length > 0 && (
                <div className="lg:col-span-2 mt-8">
                  <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-6">Inside Pages</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {book.gallery.map((image, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[3/4] rounded-lg overflow-hidden bg-neutral-800 group cursor-pointer"
                      >
                        <Image
                          src={image}
                          alt={`${book.title} page ${idx + 1}`}
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
