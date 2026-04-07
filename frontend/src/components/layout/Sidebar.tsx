"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Settings, Database, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/inbox", icon: Mail, label: "Inbox" },
  { href: "/knowledge", icon: Database, label: "Knowledge" },
  { href: "/analytics", icon: BarChart2, label: "Analytics" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 border-r border-border bg-card flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-5 border-b border-border">
        <div className="p-1.5 rounded-md border border-primary/30 bg-primary/10">
          <Mail className="w-4 h-4 text-primary" />
        </div>
        <span className="text-sm font-semibold text-gradient-cyan tracking-tight">
          Mailbot
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-0.5">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150",
                active
                  ? "bg-primary/10 text-primary border border-primary/20 glow-cyan"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{label}</span>
              {active && (
                <span className="ml-auto w-1 h-1 rounded-full bg-primary animate-pulse-slow" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-border">
        <p className="text-[10px] text-muted-foreground/50 text-center font-mono">
          v0.1.0 — Phase 1
        </p>
      </div>
    </aside>
  );
}
