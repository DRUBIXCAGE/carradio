import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, ShieldCheck, Truck, RotateCcw, Award } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#00172b] text-neutral-300 border-t border-neutral-800">
      {/* Trust & Guarantee Banner */}
      <div className="bg-[#00223d] border-b border-[#003157] py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-[#00629b]/20 flex items-center justify-center text-[#38bdf8] shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Free Ground Shipping</h4>
                <p className="text-xs text-neutral-400">On all orders over $49.99</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-[#00629b]/20 flex items-center justify-center text-[#38bdf8] shrink-0">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">30-Day Returns</h4>
                <p className="text-xs text-neutral-400">Hassle-free money-back guarantee</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-[#00629b]/20 flex items-center justify-center text-[#38bdf8] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">1-Year Warranty</h4>
                <p className="text-xs text-neutral-400">Official SiriusXM coverage</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-[#00629b]/20 flex items-center justify-center text-[#38bdf8] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Car FM Radio</h4>
                <p className="text-xs text-neutral-400">carfmradio.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company & Support Hotline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative w-56 h-12">
              <Image
                src="/images/carfmradio-logo-white.svg"
                alt="Car FM Radio"
                fill
                sizes="240px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              <strong className="text-white">Car FM Radio (carfmradio.com)</strong> is your premier source
              for SiriusXM satellite radios, vehicle kits, portable docks, and genuine replacement accessories.
              Enjoy commercial-free music, live sports, news, and entertainment on every drive.
            </p>

            <div className="p-4 rounded-xl bg-[#00223d] border border-[#003761] space-y-2">
              <div className="text-xs uppercase font-extrabold text-[#38bdf8] tracking-wider">
                Order by Phone &amp; Customer Support
              </div>
              <a
                href="tel:+18333442286"
                className="flex items-center gap-2 text-xl font-black text-white hover:text-[#38bdf8] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#38bdf8]" />
                +1-833-344-2286
              </a>
              <div className="text-xs text-neutral-400">
                Mon - Fri: 8am - 10pm EST | Sat - Sun: 9am - 8pm EST
              </div>
              <div className="text-xs text-neutral-400">
                Official Store: <span className="text-white font-medium">https://carfmradio.com/</span>
              </div>
            </div>
          </div>

          {/* Radios Column */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Satellite Radios
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link href="/#kit-selector" className="hover:text-white transition-colors">
                  Onyx EZR Vehicle Kit
                </Link>
              </li>
              <li>
                <Link href="/#kit-selector" className="hover:text-white transition-colors">
                  Onyx EZR Vehicle + Home
                </Link>
              </li>
              <li>
                <Link href="/#kit-selector" className="hover:text-white transition-colors">
                  Onyx EZR Receiver Only
                </Link>
              </li>
              <li>
                <span className="text-neutral-500">Onyx Plus (Color Screen)</span>
              </li>
              <li>
                <span className="text-neutral-500">Tour with 360L</span>
              </li>
              <li>
                <span className="text-neutral-500">Commander Touch</span>
              </li>
            </ul>
          </div>

          {/* Accessories Column */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Accessories
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link href="/#accessories" className="hover:text-white transition-colors">
                  SXDH4 Home Kit Dock
                </Link>
              </li>
              <li>
                <Link href="/#accessories" className="hover:text-white transition-colors">
                  SXSD2 Portable Boombox
                </Link>
              </li>
              <li>
                <Link href="/#accessories" className="hover:text-white transition-colors">
                  Bluetooth Vehicle Dock
                </Link>
              </li>
              <li>
                <Link href="/#accessories" className="hover:text-white transition-colors">
                  Magnetic Roof Antenna
                </Link>
              </li>
              <li>
                <Link href="/#accessories" className="hover:text-white transition-colors">
                  PowerConnect 12V Adapter
                </Link>
              </li>
              <li>
                <Link href="/#accessories" className="hover:text-white transition-colors">
                  Swivel Dash &amp; Vent Mounts
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal Column */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Help &amp; Resources
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/#specs" className="hover:text-white transition-colors">
                  Technical Specifications
                </Link>
              </li>
              <li>
                <a
                  href="https://www.siriusxm.com/activatenow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Activate Your Radio
                </a>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white transition-colors">
                  View Shopping Cart
                </Link>
              </li>
              <li>
                <span className="text-neutral-400">Order Hotline: 1-833-344-2286</span>
              </li>
              <li>
                <span className="text-neutral-400">carfmradio.com Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Legal Notice */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-xs text-neutral-500 space-y-4">
          <p>
            <strong className="text-neutral-400">Subscription Requirement:</strong> Satellite radio service
            requires a separate SiriusXM subscription plan sold separately by SiriusXM Radio Inc. Hardware
            and subscription sold separately. Service will automatically renew and bill according to your
            chosen payment method at then-current rates unless you call SiriusXM at 1-866-635-2349 to cancel.
            See SiriusXM Customer Agreement at www.siriusxm.com for complete terms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800/80">
            <p>
              &copy; {new Date().getFullYear()} Car FM Radio (carfmradio.com).
              All rights reserved. SiriusXM and all related marks and logos are trademarks of Sirius XM Radio Inc.
            </p>
            <div className="flex items-center gap-4 text-neutral-400">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer">Do Not Sell My Info</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
