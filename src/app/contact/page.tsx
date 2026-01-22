"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! Ryan will get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-amber-500 text-sm uppercase tracking-widest">Get in Touch</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mt-2 mb-6">Contact</h1>
          <p className="text-neutral-400 text-lg">
            Have a question about books, records, or artwork? Interested in collaborations
            or speaking engagements? Send a message below.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-neutral-400 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-neutral-400 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm text-neutral-400 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
              >
                <option value="">Select a topic...</option>
                <option value="books">Books / Ghost Writer Press</option>
                <option value="records">Records / Hookworm Records</option>
                <option value="artwork">Artwork / Photography</option>
                <option value="speaking">Speaking / Events</option>
                <option value="press">Press / Media</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-neutral-400 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-amber-500 text-neutral-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-2xl font-bold mb-8 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-950 rounded-lg p-6 border border-neutral-800 text-center">
              <h3 className="font-semibold mb-2">Buy Books</h3>
              <p className="text-neutral-400 text-sm mb-4">
                Browse and purchase titles from Ghost Writer Press
              </p>
              <Link href="/books" className="text-amber-500 hover:text-amber-400 text-sm">
                View Books →
              </Link>
            </div>
            <div className="bg-neutral-950 rounded-lg p-6 border border-neutral-800 text-center">
              <h3 className="font-semibold mb-2">Buy Vinyl</h3>
              <p className="text-neutral-400 text-sm mb-4">
                Get Hookworm Records compilations on vinyl
              </p>
              <Link href="/records" className="text-amber-500 hover:text-amber-400 text-sm">
                View Records →
              </Link>
            </div>
            <div className="bg-neutral-950 rounded-lg p-6 border border-neutral-800 text-center">
              <h3 className="font-semibold mb-2">Follow Along</h3>
              <p className="text-neutral-400 text-sm mb-4">
                Stay updated on new releases and events
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-amber-500 hover:text-amber-400 text-sm">Instagram</a>
                <a href="#" className="text-amber-500 hover:text-amber-400 text-sm">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
