import Link from "next/link";
import { siteConfig } from "@/data/config";
import SubscribeForm from "./SubscribeForm";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-neutral-800">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="font-playfair text-2xl font-bold mb-2">Stay Updated</h3>
          <p className="text-neutral-400 mb-6">
            Be the first to know about new releases, art drops, and events.
          </p>
          <SubscribeForm variant="compact" showHeading={false} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Ryan Clark <span className="text-amber-500">Creates</span>
            </h3>
            <p className="text-neutral-400 max-w-md">
              Author, record label founder, and visual artist based in Arizona.
              Documenting the stories, sounds, and spirits of the Southwest.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ghostwriterpress" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Ghost Writer Press
                </Link>
              </li>
              <li>
                <Link href="/hookwormrecords" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Hookworm Records
                </Link>
              </li>
              <li>
                <Link href="/fineart" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Fine Art
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.bluesky}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  Bluesky
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Ryan Clark Creates. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-neutral-600 text-xs">Ghost Writer Press</span>
            <span className="text-neutral-700">|</span>
            <span className="text-neutral-600 text-xs">Hookworm Records</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
