"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { LogOut, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  session: Session;
}

export function Header({ session }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = session.user;

  return (
    <header className="h-14 border-b border-border bg-card/80 backdrop-blur-sm flex items-center justify-between px-6 shrink-0">
      {/* Left — breadcrumb / title slot (pages can fill this via slot pattern later) */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono text-muted-foreground/50 select-none">
          ●
        </span>
        <span className="text-xs text-muted-foreground font-mono">
          personal gmail
        </span>
      </div>

      {/* Right — user menu */}
      <div className="relative">
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg border border-transparent hover:border-border hover:bg-secondary transition-all text-sm text-muted-foreground hover:text-foreground"
        >
          {user?.image ? (
            <Image
              src={user.image}
              alt={user.name ?? ""}
              width={24}
              height={24}
              className="rounded-full border border-border"
            />
          ) : (
            <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs text-primary font-medium">
              {user?.name?.[0] ?? "?"}
            </div>
          )}
          <span className="max-w-[120px] truncate text-xs">{user?.email}</span>
          <ChevronDown
            className={cn(
              "w-3 h-3 transition-transform",
              menuOpen && "rotate-180"
            )}
          />
        </button>

        {menuOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-border bg-card shadow-xl z-50 py-1 animate-fade-in">
            <div className="px-3 py-2 border-b border-border">
              <p className="text-xs font-medium text-foreground truncate">
                {user?.name}
              </p>
              <p className="text-[11px] text-muted-foreground truncate">
                {user?.email}
              </p>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
