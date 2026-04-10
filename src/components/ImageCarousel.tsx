"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  title: string;
  inline?: boolean;
}

export default function ImageCarousel({ images, title, inline = false }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={inline ? "" : "mt-16"}>
      {!inline && <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-6">Gallery</h3>}

      {/* Main Carousel */}
      <div className="relative">
        <div className={`relative aspect-square rounded-lg overflow-hidden bg-neutral-800 ${inline ? "" : "max-w-2xl mx-auto"}`}>
          <Image
            src={images[currentIndex]}
            alt={`${title} gallery image ${currentIndex + 1}`}
            fill
            className="object-contain"
          />
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-neutral-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-amber-500 hover:bg-neutral-800 transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-neutral-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-amber-500 hover:bg-neutral-800 transition-colors"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 bg-neutral-900/80 backdrop-blur-sm text-neutral-300 text-sm font-mono rounded-full">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 justify-center flex-wrap">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden bg-neutral-800 transition-all ${
                idx === currentIndex
                  ? "ring-2 ring-amber-500 opacity-100"
                  : "opacity-50 hover:opacity-75"
              }`}
            >
              <Image
                src={image}
                alt={`${title} thumbnail ${idx + 1}`}
                fill
                className="object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
