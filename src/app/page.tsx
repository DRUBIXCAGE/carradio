import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductFeatures } from "@/components/product/ProductFeatures";
import { TechnicalSpecs } from "@/components/product/TechnicalSpecs";
import { CompatibleAccessories } from "@/components/accessories/CompatibleAccessories";
import { CustomerReviews } from "@/components/product/CustomerReviews";
import { FAQSection } from "@/components/faq/FAQSection";
import { NewsletterSection } from "@/components/layout/NewsletterSection";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { onyxEzrProduct } from "@/data/productData";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-[#00629b] selection:text-white">
      {/* Top Announcement Alert Bar */}
      <AnnouncementBar />

      {/* Main Header & Nav */}
      <Header />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Product Detail Hero (Gallery + Info + Kit Selector + What's Included) */}
        <ProductHero product={onyxEzrProduct} />

        {/* Radio Features & 3-Step Vehicle DIY Install */}
        <ProductFeatures />

        {/* Full Technical Specifications */}
        <TechnicalSpecs groups={onyxEzrProduct.specifications} />

        {/* Compatible Accessories & Docks */}
        <CompatibleAccessories />

        {/* Customer Reviews & Testimonials */}
        <CustomerReviews />

        {/* FAQ Accordion Section */}
        <FAQSection />

        {/* Newsletter Signup */}
        <NewsletterSection />
      </main>

      {/* Shopping Cart Slide-over Drawer */}
      <CartDrawer />

      {/* Complete Footer */}
      <Footer />


      {/* Shopping Cart Slide-over Drawer */}
      <CartDrawer />

      {/* Complete Footer */}
      <Footer />
    </div>
  );
}
