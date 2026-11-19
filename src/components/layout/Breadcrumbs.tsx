import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items?: { label: string; href?: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items = [
    { label: "Radios", href: "/#radios" },
    { label: "Vehicle Radios", href: "/#kit-selector" },
    { label: "Onyx EZR with Vehicle Kit" },
  ],
}) => {
  return (
    <nav aria-label="Breadcrumb" className="bg-[#f8fafc] border-b border-neutral-200/60 py-2.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 text-xs text-neutral-500">
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-[#00629b] transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={item.label}>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
              {isLast || !item.href ? (
                <span className="font-semibold text-neutral-900 truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#00629b] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

