import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-sudan-black text-black dark:text-sudan-white py-12 transition-colors">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <span className="lg:inline hidden">
                Sudanese Against War and its Parties
              </span>
              <span className="lg:hidden inline">SAWP</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Supporting peace and democracy in Sudan through global solidarity
              and action.
            </p>
          </div>

          {/* Primary Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-sudan-red transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className="hover:text-sudan-red transition-colors"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-sudan-red transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="text-gray-600 dark:text-gray-400">
              <p className="mb-4">
                Make your voice heard. Join our community for updates and
                action.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="hover:text-sudan-red transition-colors p-2"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  className="hover:text-sudan-red transition-colors p-2"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  className="hover:text-sudan-red transition-colors p-2"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <div className="mb-4 md:mb-0">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <span className="lg:inline hidden">
                Sudanese Against War and its Parties
              </span>
              <span className="lg:hidden inline">SAWP</span>. All rights
              reserved.
            </p>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-4">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-sudan-red transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-sudan-red transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-sudan-red transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
